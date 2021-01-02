import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciDto } from '@modules/kullanici/model/kullanici-dto.models'; 
import { KullaniciService } from '@modules/kullanici/service/kullanici.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-kullanici-list',
  templateUrl: './kullanici-list.component.html',
  styleUrls: ['./kullanici-list.component.css']
})
export class KullaniciListComponent implements OnInit {

  public kullanicilar: any[];
  constructor(private readonly kullaniciServis: KullaniciService,
              private readonly ngxService: NgxUiLoaderService,
              public toastr: ToastrManager,
              private readonly router: Router) { 
    kullaniciServis.list().subscribe(res=>{
      this.kullanicilar  = res.data;
    })
  }

  ngOnInit(): void {
  }

  duzenle(item: KullaniciDto){
    console.log(item);
    this.router.navigateByUrl("/kullanici/form/" + item.id);

  }
  sil(item: KullaniciDto){
    this.kullaniciServis.delete(item.id).subscribe(data=>{
      console.log('silindi.')

    });

  }
  yeniKayit(){
    this.router.navigateByUrl("/kullanici/form/");

  }

}
