import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { WeatherApiPage } from '../pages/weather-api/weather-api';
import { WeatherPage } from '../pages/weather/weather';
import { ForecastPage } from '../pages/forecast/forecast';
import { ChartModule } from 'angular2-highcharts';
// import { CHART_DIRECTIVES } from 'angular2-highcharts';
// import { ChartModule } from 'chart.js';
// import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { AppConstantsProvider } from '../providers/app-constants/app-constants';
import { WeatherApiProvider } from '../providers/weather-api/weather-api';

declare var require:any;
// export function highchartsFactory() {
//   return highcharts;
// }

@NgModule({
  declarations: [
    MyApp,
    WeatherApiPage,
    WeatherPage,
    ForecastPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule,
    ChartModule.forRoot(highcharts, require('highcharts/modules/map')),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WeatherApiPage,
    WeatherPage,
    ForecastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: [ErrorHandler], useClass: IonicErrorHandler
      // , useFactory: highchartsFactory},
    },
    AppConstantsProvider,
    WeatherApiProvider
  ]
})
export class AppModule { }
