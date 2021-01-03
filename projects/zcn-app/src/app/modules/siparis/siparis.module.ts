import { NgModule } from '@angular/core'; 
 
import { SharedModule } from 'app/shared/shared.module'; 
import { SiparisRoutingModule } from './siparis.routing';
import { SiparisListComponent } from './pages/siparis-list/siparis-list.component';
import { SiparisFormComponent } from './pages/siparis-form/siparis-form.component';

@NgModule({
  declarations: [ 
    SiparisFormComponent,
    SiparisListComponent,
  ],
  imports: [SharedModule, SiparisRoutingModule],
  exports: [],
  providers: [],
})
export class SiparisModule {}
