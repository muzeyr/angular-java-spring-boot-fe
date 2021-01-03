import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiparisDto } from '@modules/siparis/model/siparis'; 
import { SiparisService } from '@modules/siparis/service/siparis.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-siparis-list',
  templateUrl: './siparis-list.component.html',
  styleUrls: ['./siparis-list.component.css']
})
export class  SiparisListComponent implements OnInit {

  public data: any[];
  constructor(private readonly  siparisServis:  SiparisService,
              private readonly ngxService: NgxUiLoaderService,
              public toastr: ToastrManager,
              private readonly router: Router) { 
    siparisServis.list().subscribe(res=>{
      this.data  = res.data;
    })
  }

  ngOnInit(): void {
  }

  duzenle(item: SiparisDto){
    console.log(item);
    this.router.navigateByUrl("/siparis/form/" + item.id);

  }
  sil(item: SiparisDto){
    this.siparisServis.delete(item.id).subscribe(data=>{
      console.log('silindi.')

    });

  }
  yeniKayit(){
    this.router.navigateByUrl("/siparis/form/");

  }

}
