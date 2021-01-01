import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { KategoriUrunFormComponent } from './page/kategori-urun-form/kategori-urun-form.component';
import { KategoriUrunListComponent } from './page/kategori-urun-list/kategori-urun-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: KategoriUrunListComponent
  },
  {
    path: 'form/:id',
    component: KategoriUrunFormComponent,
  },
  {
    path: 'form',
    component: KategoriUrunFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KategoriRoutingModule {}
