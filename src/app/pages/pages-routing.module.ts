import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirereportComponent } from './firereport/firereport.component';
import { FirealertComponent } from './firealert/firealert.component';
import { WeatherComponent } from './weather/weather.component';
import { TrafficComponent } from './traffic/traffic.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'reportfire',
      component: FirereportComponent
    },
    {
      path: 'firealert',
      component: FirealertComponent
    },
    {
      path: 'weather',
      component: WeatherComponent
    },
    {
      path: 'traffic',
      component: TrafficComponent
    }
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
