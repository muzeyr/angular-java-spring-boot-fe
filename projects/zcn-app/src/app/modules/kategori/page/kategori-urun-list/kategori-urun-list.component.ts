import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KategoriService } from 'app/modules/kategori/service/kategori.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategortDto } from '../../model/category-dto.models';

@Component({
  selector: 'app-kategori-urun-list',
  templateUrl: './kategori-urun-list.component.html',
  styleUrls: ['./kategori-urun-list.component.css']
})
export class KategoriUrunListComponent implements OnInit {

  public data: CategortDto[];
  constructor(private readonly kategoriServis: KategoriService,
              private readonly ngxService: NgxUiLoaderService,
              public toastr: ToastrManager,
              private readonly router: Router
              ) {
    this.onLoad();
   
  }
  onLoad(){
    this.ngxService.start();
    this.kategoriServis.list().subscribe(res=>{
      
      this.data = res.data;
      this.ngxService.stop();
      if(res.type ==='S'){
        this.toastr.successToastr(res.message)
      }else{
        this.toastr.warningToastr(res.message)
      }
    },error=>{
      this.ngxService.stop();
      this.toastr.errorToastr(error.message);
      
    });
  }

  ngOnInit(): void {
  }
  duzenle(item: CategortDto){
    this.router.navigateByUrl("/kategori/form/" + item.id);

  }
  sil(item: CategortDto){
    this.kategoriServis.delete(item.id).subscribe(data=>{
      this.onLoad();
    });

  }
  yeniKayit(){
    this.router.navigateByUrl("/kategori/form");

  }

}
