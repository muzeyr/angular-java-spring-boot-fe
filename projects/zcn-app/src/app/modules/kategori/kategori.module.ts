import { NgModule } from '@angular/core'; 

import { KategoriRoutingModule } from './kategori.routing';
import { SharedModule } from 'app/shared/shared.module';
import { KategoriUrunFormComponent } from './page/kategori-urun-form/kategori-urun-form.component';
import { KategoriUrunListComponent } from './page/kategori-urun-list/kategori-urun-list.component';
import { MyModalComponent } from './modal/my-modal.component';

@NgModule({
  declarations: [
    KategoriUrunFormComponent,
    KategoriUrunListComponent,
    MyModalComponent,
  ],
  imports: [SharedModule, KategoriRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class KategoriModule {}
