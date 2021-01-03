import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  

import { SiparisFormComponent } from './pages/siparis-form/siparis-form.component';
import { SiparisListComponent } from './pages/siparis-list/siparis-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: SiparisListComponent
  },
  {
    path: 'form/:id',
    component: SiparisFormComponent,
  },
  {
    path: 'form',
    component: SiparisFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiparisRoutingModule {}
