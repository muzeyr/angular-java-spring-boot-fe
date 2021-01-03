import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategortDto } from '@modules/kategori/model/category-dto.models';
import { KategoriService } from '@modules/kategori/service/kategori.service';
import { MusteriDto } from '@modules/musteri/model/musteri';
import { MusteriFormDto } from '@modules/musteri/model/musteri-form';
import { MusteriService } from '@modules/musteri/service/musteri.service';
import { SiparisDto } from '@modules/siparis/model/siparis';
import { SiparisSaveDto } from '@modules/siparis/model/siparis-save-dto';
import { SiparisService } from '@modules/siparis/service/siparis.service';
import { CategroyForm } from 'app/models/categoryForm'; 
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable } from 'rxjs';
import { startWith,map } from 'rxjs/operators';

@Component({
  selector: 'app-siparis-form',
  templateUrl: './siparis-form.component.html',
  styleUrls: ['./siparis-form.component.css']
})
export class  SiparisFormComponent implements OnInit {
 
  siparis: SiparisDto;
  siparisUrunler: any = [];
  public modelConvert = new CategroyForm();
  public formGroup;
  public musteriler: MusteriFormDto[];
  public kategoriler: CategortDto[];
  public isLoading: boolean = false;
  public seciliMusteri: MusteriFormDto;
  public siparisDto: SiparisSaveDto;
  
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];


  filteredMusteriler: Observable<MusteriFormDto[]>;
    control = new FormControl();


  constructor(private readonly activatedRouter: ActivatedRoute,
    private readonly ngxService: NgxUiLoaderService,
    public toastr: ToastrManager,
    private readonly router: Router,
    private readonly siparisService: SiparisService,
    private readonly kategoriService: KategoriService,
    private readonly musteriService: MusteriService) {
     
      this.seciliMusteri = new MusteriFormDto();
    //  ngxService.start();
      this.musteriService.list().subscribe(res => {
        this.musteriler = res.data;
      })
      this.kategoriService.list().subscribe(res => {
        this.kategoriler = res.data;
        this.siparis = new SiparisDto();
        this.siparis.kategoriler  = res.data;
        this.formGroup = this.modelConvert.convertModelToSiparisFormGroup(this.siparis);

        ngxService.stop();
        this.isLoading = true;

      })
  }

  ngOnInit(): void {
    this.filteredMusteriler = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
    this.activatedRouter.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.ngxService.start();
        this.siparisService.find(params.get('id')).subscribe(data=>{
          this.siparis = data.object;
          this.toastr.successToastr(data.message);
          this.ngxService.stop();
         // this.formGroup = this.modelConvert.convertModelToSiparisFormGroup(this.siparis);
        },error =>{
          this.ngxService.stop();
        })
        

      }
    });
  } 
  ekle(item: any){
    console.log(22);
    this.siparisUrunler  = this.formGroup.get('siparisUrunler') as FormArray;

    this.siparisUrunler.push(this.modelConvert.siparisEkle(item.value));

    
  }
  onSubmit(){
    if(!this.seciliMusteri.name){
      this.toastr.errorToastr("Lütfen müşteri seçiniz");
      return;
    }
    if( this.formGroup.value.siparisUrunler.length === 0){
      this.toastr.errorToastr("Lütfen sipariş vermek için en az bir ürün seçiniz");
      return;
    }
    console.log(this.formGroup.value)
    this.siparisDto = new SiparisSaveDto();
    this.siparisDto.musteri = this.seciliMusteri;
    this.siparisDto.urunler = this.formGroup.value.siparisUrunler;
    this.siparisDto.tutar = 0;
    this.siparisDto.urunler.forEach(pr=>{
      this.siparisDto.tutar += pr.fiyat;
    })
    this.siparisService.save(this.siparisDto).subscribe(res=>{
      this.toastr.successToastr(res.message);
      this.router.navigateByUrl("/siparis/list");

    });
    
  } 
  selectionMusteri($event){
    console.log($event);
    this.seciliMusteri = $event.value;

  }
  private _filter(value: string): MusteriFormDto[] {
    const filterValue = this._normalizeValue(value);
    return this.musteriler.filter(musteri => this._normalizeValue(musteri.name).includes(filterValue));
  }


  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  public onMusteriChange(uuid: string): void {
    this.seciliMusteri =   this.musteriler.find(item=>item.name===uuid)


  }

}
