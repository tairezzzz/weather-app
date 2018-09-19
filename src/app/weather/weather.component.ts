import { Component, OnInit } from '@angular/core';
import { City } from '../core/interfaces/city';
import { CityService } from '../core/services/city.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

    cities: Array<City> = [];
    chosenCity; // create variable for saving current (chosen) city

    constructor(private citiesService: CityService) { }

    ngOnInit() {
        this.cities = this.citiesService.getCities();
    }

    onChooseCity(index: number): void {
        console.log(index); // logging the index of the city in the browser console
        this.chosenCity = index;
    }


}
