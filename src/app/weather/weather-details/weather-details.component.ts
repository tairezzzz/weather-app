import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Forecast } from '../../core/interfaces/forecast';
import { CityService } from '../../core/services/city.service';

@Component({
    selector: 'app-weather-details',
    templateUrl: './weather-details.component.html',
    styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

    forecast: Forecast;

    constructor(private route: ActivatedRoute,
                private cityService: CityService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => this.initializeForecast(+params.id));
    }

    initializeForecast(id: number) {
        this.forecast = this.cityService.getForecast(id);
    }
}
