import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusteriDto } from '@modules/kaan/model/kaan';
import { KaanService } from '@modules/kaan/service/kaan.service';
import { CategroyForm } from 'app/models/categoryForm'; 
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-kaan-form',
  templateUrl: './kaan-form.component.html',
  styleUrls: ['./kaan-form.component.css']
})
export class  KaanFormComponent implements OnInit {
 
  constructor(private readonly activatedRouter: ActivatedRoute,
    private readonly ngxService: NgxUiLoaderService,
    public toastr: ToastrManager,
    private readonly router: Router,
    private readonly kaanService: KaanService) {
 
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.ngxService.start();
        this.kaanService.find(params.get('id')).subscribe(data=>{
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
    this.kaanService.save(this.formGroup.value).subscribe(res=>{
      this.toastr.successToastr(res.message);
      this.router.navigateByUrl("/kaan/list");

    });
    
  } 
}
