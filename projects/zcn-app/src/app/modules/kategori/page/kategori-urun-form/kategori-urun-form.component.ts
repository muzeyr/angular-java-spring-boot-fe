import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategroyForm } from 'app/models/categoryForm';
import { IModelConvert } from 'app/models/IModelConvert';
import { KategoriService } from 'app/modules/kategori/service/kategori.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-kategori-urun-form',
  templateUrl: './kategori-urun-form.component.html',
  styleUrls: ['./kategori-urun-form.component.css']
})
export class KategoriUrunFormComponent implements OnInit {

  public formGroup;
  public urunler;
  public kategori: any;
  public modelConvert = new CategroyForm();
  constructor(private readonly activatedRouter: ActivatedRoute,
              private readonly ngxService: NgxUiLoaderService,
              public toastr: ToastrManager,
              private readonly router: Router,
              private readonly kategoriServis: KategoriService) {
    this.formGroup = this.modelConvert.convertModelToFormGroup({id:'',categoryName:'',products:[]});
    this.urunEkle();
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.ngxService.start();
        this.kategoriServis.detail(params.get('id')).subscribe(data=>{
          console.log(data);
          this.kategori = data.object;
          this.toastr.successToastr(data.message);
          this.formGroup = this.modelConvert.convertModelToFormGroup(this.kategori);
          this.ngxService.stop();

        },error =>{
          this.ngxService.stop();
        })
        

      }
    });
  } 
  onSubmit(){
    this.kategoriServis.save(this.formGroup.value).subscribe(res=>{
      this.toastr.successToastr(res.message);
      this.router.navigateByUrl("/kategori/list");

    });
    
  }
  urunEkle(){
    this.urunler  = this.formGroup.get('urunler') as FormArray;
    this.urunler.push(this.modelConvert.formUrunEkle({id:'',productName:'',price:0}));
  }

  urunSil(indx: number){
    this.urunler  = this.formGroup.get('urunler') as FormArray;
    this.urunler.removeAt(indx);
    console.log(indx)
    console.log('silindi')
  }
  

}

