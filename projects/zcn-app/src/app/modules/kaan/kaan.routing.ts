import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  

import { KaanFormComponent } from './pages/kaan-form/kaan-form.component';
import { KaanListComponent } from './pages/kaan-list/kaan-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: KaanListComponent
  },
  {
    path: 'form/:id',
    component: KaanFormComponent,
  },
  {
    path: 'form',
    component: KaanFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaanRoutingModule {}
