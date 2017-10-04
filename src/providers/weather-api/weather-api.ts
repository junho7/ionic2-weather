import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstantsProvider } from '../app-constants/app-constants';

/*
  Generated class for the WeatherApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//this marks the class to be available for the component for instantiation
@Injectable()
export class WeatherApiProvider {
  weatherURL: string;
  private constantVar: any;
  constructor(public http: Http, constantVar: AppConstantsProvider) {
    // console.log('Hello WeatherApiProvider Provider');
    this.constantVar = constantVar;
    this.weatherURL = constantVar.getForecastURL();
  }

  getCurrentWeather(longitude: any, latitude: any) {
    // return this.http.get(this.weatherURL + latitude + "," + longitude).map(res => res.json())
    return this.http.get('/forecast' + "/" + latitude + "," + longitude).map(res => res.json())
  }


  getGeometry(googleAPIURL: any, location: any) {
    // return this.http.get(googleAPIURL + "'" + location + "'").map(res => res.json())
    return this.http.get('/location' + "/json?address=" + location).map(res => res.json())
  }

}
