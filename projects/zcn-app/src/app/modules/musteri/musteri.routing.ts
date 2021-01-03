import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  

import { MusteriFormComponent } from './pages/musteri-form/musteri-form.component';
import { MusteriListComponent } from './pages/musteri-list/musteri-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: MusteriListComponent
  },
  {
    path: 'form/:id',
    component: MusteriFormComponent,
  },
  {
    path: 'form',
    component: MusteriFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusteriRoutingModule {}
