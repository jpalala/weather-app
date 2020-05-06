import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//TODO CALL with httpservice
export class OpenweatherService {

//  private OPENWEATHER_ONECALL_API_URL = 'https://api.openweathermap.org/data/2.5/onecall?';
  private latitude;
  private longitude;
  private FORECASTS_SERVICE_URL = 'http://localhost:4200/forecasts'; // FYI: Proxied to :3000/forecasts
  private CITY_URL = 'http://localhost:4200/city';

  constructor(private http: HttpClient) {  }

  public getForecasts(): any {
    // console.log(
    return this.http.get(this.FORECASTS_SERVICE_URL);
  }

  public getCity(): any {
    return this.http.get(this.CITY_URL);
  }

  public setLatitude(latitude : number) {
    this.latitude = latitude;
  }

  public setLongitude(longitude: number) {
    this.longitude = longitude;
  }

  //TODO (stub) actually get from the real API using onecall
  // public getForecastsFromOpenWeather() {
  //   return this.httpClient.get(this.OPENWEATHER_ONECALL_API_URL + lat=&);
  // }

}
