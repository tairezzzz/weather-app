import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherDetailsComponent } from './weather-details.component';

const weatherDetailsRoutes: Routes = [
    { path: '', component: WeatherDetailsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(weatherDetailsRoutes) ],
    exports: [ RouterModule ]
})
export class WeatherDetailsRoutingModule { }
