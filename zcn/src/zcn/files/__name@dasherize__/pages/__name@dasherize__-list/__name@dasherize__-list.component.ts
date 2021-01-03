import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { <%= classify(name) %>Dto } from '@modules/<%= (name) %>/model/<%= (name) %>'; 
import { <%= classify(name) %>Service } from '@modules/<%= (name) %>/service/<%= (name) %>.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-<%= (name) %>-list',
  templateUrl: './<%= (name) %>-list.component.html',
  styleUrls: ['./<%= (name) %>-list.component.css']
})
export class  <%= classify(name) %>ListComponent implements OnInit {

  public data: any[];
  constructor(private readonly  <%= (name) %>Servis:  <%= classify(name) %>Service,
              private readonly ngxService: NgxUiLoaderService,
              public toastr: ToastrManager,
              private readonly router: Router) { 
    <%= (name) %>Servis.list().subscribe(res=>{
      this.data  = res.data;
    })
  }

  ngOnInit(): void {
  }

  duzenle(item: <%= classify(name) %>Dto){
    console.log(item);
    this.router.navigateByUrl("/<%= (name) %>/form/" + item.id);

  }
  sil(item: <%= classify(name) %>Dto){
    this.<%= (name) %>Servis.delete(item.id).subscribe(data=>{
      console.log('silindi.')

    });

  }
  yeniKayit(){
    this.router.navigateByUrl("/<%= (name) %>/form/");

  }

}
