import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusteriDto } from '@modules/musteri/model/musteri'; 
import { MusteriService } from '@modules/musteri/service/musteri.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-musteri-list',
  templateUrl: './musteri-list.component.html',
  styleUrls: ['./musteri-list.component.css']
})
export class  MusteriListComponent implements OnInit {

  public data: MusteriDto[];
  constructor(private readonly  musteriServis:  MusteriService,
              private readonly ngxService: NgxUiLoaderService,
              public toastr: ToastrManager,
              private readonly router: Router) { 
                this.load();
              }

  ngOnInit(): void {
  }
  load(){
    this.musteriServis.list().subscribe(res=>{
      this.data  = res.data;
    })
  }
  duzenle(item: MusteriDto){
    console.log(item);
    this.router.navigateByUrl("/musteri/form/" + item.id);

  }
  sil(item: MusteriDto){
    this.musteriServis.delete(item.id).subscribe(data=>{
      this.toastr.errorToastr(data.message)
      this.load();

    });

  }
  yeniKayit(){

    this.router.navigateByUrl("/musteri/form/");

  }

}
