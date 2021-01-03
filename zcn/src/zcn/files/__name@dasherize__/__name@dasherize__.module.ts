import { NgModule } from '@angular/core'; 
 
import { SharedModule } from 'app/shared/shared.module'; 
import { <%= classify(name) %>RoutingModule } from './<%= (name) %>.routing';
import { <%= classify(name) %>ListComponent } from './pages/<%= (name) %>-list/<%= (name) %>-list.component';
import { <%= classify(name) %>FormComponent } from './pages/<%= (name) %>-form/<%= (name) %>-form.component';

@NgModule({
  declarations: [ 
    <%= classify(name) %>FormComponent,
    <%= classify(name) %>ListComponent,
  ],
  imports: [SharedModule, <%= classify(name) %>RoutingModule],
  exports: [],
  providers: [],
})
export class <%= classify(name) %>Module {}
