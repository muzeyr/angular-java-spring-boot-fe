import { NgModule } from '@angular/core'; 
 
import { SharedModule } from 'app/shared/shared.module'; 
import { KullaniciRoutingModule } from './__name@dasherize__.routing';
import { KullaniciListComponent } from './page/kullanici-list/kullanici-list.component';
import { KullaniciFormComponent } from './page/kullanici-form/kullanici-form.component';

@NgModule({
  declarations: [ 
    KullaniciFormComponent,
    KullaniciListComponent,
  ],
  imports: [SharedModule, KullaniciRoutingModule],
  exports: [],
  providers: [],
})
export class KullaniciModule {}
