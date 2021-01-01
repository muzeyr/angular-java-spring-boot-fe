import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { KullaniciListComponent } from 'app/modules/kullanici/page/kullanici-list/kullanici-list.component';
import { KullaniciFormComponent } from './page/kullanici-form/kullanici-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: KullaniciListComponent
  },
  {
    path: 'form/:id',
    component: KullaniciFormComponent,
  },
  {
    path: 'form',
    component: KullaniciFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KullaniciRoutingModule {}
