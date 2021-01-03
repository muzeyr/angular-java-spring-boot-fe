import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategortDto } from '@modules/kategori/model/category-dto.models';
import { KategoriService } from '@modules/kategori/service/kategori.service';
import { MusteriFormDto } from '@modules/musteri/model/musteri-form';
import { MusteriService } from '@modules/musteri/service/musteri.service';
import { SiparisDto } from '@modules/siparis/model/siparis';
import { SiparisService } from '@modules/siparis/service/siparis.service';
import { CategroyForm } from 'app/models/categoryForm'; 
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-siparis-form',
  templateUrl: './siparis-form.component.html',
  styleUrls: ['./siparis-form.component.css']
})
export class  SiparisFormComponent implements OnInit {
 
  siparis: SiparisDto;
  public modelConvert = new CategroyForm();
  public formGroup;
  public musteriler: MusteriFormDto[];
  public kategoriler: CategortDto[];

  constructor(private readonly activatedRouter: ActivatedRoute,
    private readonly ngxService: NgxUiLoaderService,
    public toastr: ToastrManager,
    private readonly router: Router,
    private readonly siparisService: SiparisService,
    private readonly kategoriService: KategoriService,
    private readonly musteriService: MusteriService) {
      this.siparis = new SiparisDto();
      

      this.musteriService.list().subscribe(res=>{
        this.musteriler = res.data;
      })
      this.kategoriService.list().subscribe(res=>{
        this.formGroup = this.modelConvert.convertModelToSiparisFormGroup(this.siparis);
        this.kategoriler = res.data;
      })
    }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.ngxService.start();
        this.siparisService.find(params.get('id')).subscribe(data=>{
          console.log(data);
          this.siparis = data.object;
          this.toastr.successToastr(data.message);
          this.ngxService.stop();
          this.formGroup = this.modelConvert.convertModelToSiparisFormGroup(this.siparis);

        },error =>{
          this.ngxService.stop();
        })
        

      }
    });
  } 
  onSubmit(){
    this.siparisService.save(this.formGroup.value).subscribe(res=>{
      this.toastr.successToastr(res.message);
      this.router.navigateByUrl("/siparis/list");

    });
    
  } 
}
