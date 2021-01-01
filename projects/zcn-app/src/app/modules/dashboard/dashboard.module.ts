import { NgModule } from '@angular/core';
import { DashboardComponent } from 'app/modules/dashboard/pages/dashboard.component';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [SharedModule, DashboardRoutingModule],
  exports: [],
  providers: []
})
export class DashboardModule {}
