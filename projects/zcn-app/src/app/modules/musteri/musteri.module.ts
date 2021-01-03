import { NgModule } from '@angular/core'; 
 
import { SharedModule } from 'app/shared/shared.module'; 
import { MusteriRoutingModule } from './musteri.routing';
import { MusteriListComponent } from './pages/musteri-list/musteri-list.component';
import { MusteriFormComponent } from './pages/musteri-form/musteri-form.component';

@NgModule({
  declarations: [ 
    MusteriFormComponent,
    MusteriListComponent,
  ],
  imports: [SharedModule, MusteriRoutingModule],
  exports: [],
  providers: [],
})
export class MusteriModule {}
