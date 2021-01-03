import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  

import { <%= classify(name) %>FormComponent } from './pages/<%= (name) %>-form/<%= (name) %>-form.component';
import { <%= classify(name) %>ListComponent } from './pages/<%= (name) %>-list/<%= (name) %>-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: <%= classify(name) %>ListComponent
  },
  {
    path: 'form/:id',
    component: <%= classify(name) %>FormComponent,
  },
  {
    path: 'form',
    component: <%= classify(name) %>FormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule {}
