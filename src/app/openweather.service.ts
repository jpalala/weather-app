import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//TODO CALL with httpservice
export class OpenweatherService {

  constructor() { }
  getWeather(): any {
    return {city : 'Manila', temperature : '30 C/86 F'}
  }
}
