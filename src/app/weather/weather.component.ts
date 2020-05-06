import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from '../openweather.service';
import { Observable } from 'rxjs-compat/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  weather$: any;
  city$: Object;
  celsius: any;

  constructor(private openweather: OpenweatherService) { }

  ngOnInit() {
    this.openweather.getForecasts().subscribe(
      openweather => this.weather$ = openweather
    );
    this.getCity();
  }

  getCity() {
      this.openweather.getCity().subscribe(
        openweather => this.city$ = openweather
      );
  }

  getCelsius(kelvin: string): string{
    var diff = 273.15;
    var numKelvin = parseFloat(kelvin);
    var celsius = numKelvin-diff;
    return celsius.toFixed(2);
  }

}
