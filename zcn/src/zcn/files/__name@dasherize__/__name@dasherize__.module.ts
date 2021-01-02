import { NgModule } from '@angular/core'; 
 
import { SharedModule } from 'app/shared/shared.module'; 
import { <%= classify(name) %>RoutingModule } from './__name@dasherize__.routing';
import { <%= classify(name) %>ListComponent } from './page/<%= (name) %>-list/<%= (name) %>-list.component';
import { <%= classify(name) %>FormComponent } from './page/<%= (name) %>-form/<%= (name) %>-form.component';

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
