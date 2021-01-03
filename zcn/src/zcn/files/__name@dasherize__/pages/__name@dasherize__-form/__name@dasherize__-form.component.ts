import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusteriDto } from '@modules/<%= (name) %>/model/<%= (name) %>';
import { <%= classify(name) %>Service } from '@modules/<%= (name) %>/service/<%= (name) %>.service';
import { CategroyForm } from 'app/models/categoryForm'; 
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-<%= (name) %>-form',
  templateUrl: './<%= (name) %>-form.component.html',
  styleUrls: ['./<%= (name) %>-form.component.css']
})
export class  <%= classify(name) %>FormComponent implements OnInit {
 
  constructor(private readonly activatedRouter: ActivatedRoute,
    private readonly ngxService: NgxUiLoaderService,
    public toastr: ToastrManager,
    private readonly router: Router,
    private readonly <%= (name) %>Service: <%= classify(name) %>Service) {
 
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.ngxService.start();
        this.<%= (name) %>Service.find(params.get('id')).subscribe(data=>{
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
    this.<%= (name) %>Service.save(this.formGroup.value).subscribe(res=>{
      this.toastr.successToastr(res.message);
      this.router.navigateByUrl("/<%= (name) %>/list");

    });
    
  } 
}
