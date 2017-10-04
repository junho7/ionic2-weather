import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppConstantsProvider {
  googleAPIURL: string;
  forecastURL: string;
  constructor(public http: Http) {
    // console.log('Hello AppConstantsProvider Provider');
    this.googleAPIURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    this.forecastURL = "https://api.darksky.net/forecast/afed4363353b2a57e45a70499bf5e715/";

  }

  getGoogleAPIURL() {
    return this.googleAPIURL;
  }

  getForecastURL() {
    return this.forecastURL;
  }
}
