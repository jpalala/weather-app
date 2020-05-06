import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//TODO CALL with httpservice
export class OpenweatherService {

  private OPENWEATHER_ONECALL_API_URL = 'https://api.openweathermap.org/data/2.5/onecall?';
  private latitude;
  private longitude;

  constructor(private HttpClient) { 
    // manila lat/long
    this.latitude = 14.59;
    this.longitude = 120.98;
  }

  public get() {
    return this.httpClient.get(this.OPENWEATHER_ONECALL_API_URL + lat=&);
  }
  
  public getWeather(): any {
    return {city : 'Manila', temperature : '30 C/86 F'}
  }
}
