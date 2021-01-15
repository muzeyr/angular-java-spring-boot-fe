import { NgModule } from '@angular/core'; 
 
import { SharedModule } from 'app/shared/shared.module'; 
import { KaanRoutingModule } from './kaan.routing';
import { KaanListComponent } from './pages/kaan-list/kaan-list.component';
import { KaanFormComponent } from './pages/kaan-form/kaan-form.component';

@NgModule({
  declarations: [ 
    KaanFormComponent,
    KaanListComponent,
  ],
  imports: [SharedModule, KaanRoutingModule],
  exports: [],
  providers: [],
})
export class KaanModule {}
