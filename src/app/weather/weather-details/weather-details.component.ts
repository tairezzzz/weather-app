import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Forecast } from '../../core/interfaces/forecast';
import { CitiesService } from '../../core/services/cities.service';

@Component({
    selector: 'app-weather-details',
    templateUrl: './weather-details.component.html',
    styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

    forecast: Forecast;

    constructor(private route: ActivatedRoute,
                private citiesService: CitiesService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => this.initializeForecast(+params.id));
    }

    initializeForecast(id: number) {
        this.forecast = this.citiesService.getForecast(id);
    }
}
