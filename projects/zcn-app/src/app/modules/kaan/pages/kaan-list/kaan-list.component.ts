import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KaanDto } from '@modules/kaan/model/kaan'; 
import { KaanService } from '@modules/kaan/service/kaan.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-kaan-list',
  templateUrl: './kaan-list.component.html',
  styleUrls: ['./kaan-list.component.css']
})
export class  KaanListComponent implements OnInit {

  public data: any[];
  constructor(private readonly  kaanServis:  KaanService,
              private readonly ngxService: NgxUiLoaderService,
              public toastr: ToastrManager,
              private readonly router: Router) { 
    kaanServis.list().subscribe(res=>{
      this.data  = res.data;
    })
  }

  ngOnInit(): void {
  }

  duzenle(item: KaanDto){
    console.log(item);
    this.router.navigateByUrl("/kaan/form/" + item.id);

  }
  sil(item: KaanDto){
    this.kaanServis.delete(item.id).subscribe(data=>{
      console.log('silindi.')

    });

  }
  yeniKayit(){
    this.router.navigateByUrl("/kaan/form/");

  }

}
