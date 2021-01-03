import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MusteriDto } from '@modules/musteri/model/musteri';
import { MusteriService } from '@modules/musteri/service/musteri.service';
import { CategroyForm } from 'app/models/categoryForm'; 
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-musteri-form',
  templateUrl: './musteri-form.component.html',
  styleUrls: ['./musteri-form.component.css']
})
export class MusteriFormComponent implements OnInit {

  public formGroup;
  public musteriler;
  public musteri: MusteriDto;
  public modelConvert = new CategroyForm();
  constructor(private readonly activatedRouter: ActivatedRoute,
              private readonly ngxService: NgxUiLoaderService,
              public toastr: ToastrManager,
              private readonly router: Router,
              private readonly musteriService: MusteriService) {
    this.musteri = new MusteriDto()
    this.formGroup = this.modelConvert.convertModelToMusteriFormGroup(this.musteri);
    
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.ngxService.start();
        this.musteriService.find(params.get('id')).subscribe(data=>{
          console.log(data);
          this.musteri = data.object;
          this.toastr.successToastr(data.message);
          this.ngxService.stop();
          this.formGroup = this.modelConvert.convertModelToMusteriFormGroup(this.musteri);

        },error =>{
          this.ngxService.stop();
        })
        

      }
    });
  } 
  onSubmit(){
    this.musteriService.save(this.formGroup.value).subscribe(res=>{
      this.toastr.successToastr(res.message);
      this.router.navigateByUrl("/musteri/list");

    });
    
  } 
  

}

