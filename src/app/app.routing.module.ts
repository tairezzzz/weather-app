import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'weather', loadChildren: './weather/weather.module#WeatherModule' },
    { path: '', redirectTo: 'weather', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }