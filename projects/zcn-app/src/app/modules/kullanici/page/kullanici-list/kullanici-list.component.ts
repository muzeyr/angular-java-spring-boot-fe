import { Component, OnInit } from '@angular/core';
import { KullaniciService } from '@modules/kullanici/service/kullanici.service';

@Component({
  selector: 'app-kullanici-list',
  templateUrl: './kullanici-list.component.html',
  styleUrls: ['./kullanici-list.component.css']
})
export class KullaniciListComponent implements OnInit {

  public kullanicilar: any[];
  constructor(private readonly kullaniciServis: KullaniciService) { 
    kullaniciServis.kullaniciListesi().subscribe(res=>{
      this.kullanicilar  = res.data;
    })
  }

  ngOnInit(): void {
  }

}
