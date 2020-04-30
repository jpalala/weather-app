import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(private openweatherService: OpenweatherService) { }

  ngOnInit() {
  }

  getWeather() {
    this.weather = this.openweatherService.getWeather();
  }

}
