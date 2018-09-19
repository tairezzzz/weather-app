import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather.component';

const weatherRoutes: Routes = [
    { path: '',
        component: WeatherComponent,
        children: [
            { path: 'details/:id', loadChildren: './weather-details/weather-details.module#WeatherDetailsModule' }
        ]
    }
];


@NgModule({
    imports: [ RouterModule.forChild(weatherRoutes) ],
    exports: [ RouterModule ]
})
export class WeatherRoutingModule { }
