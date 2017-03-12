import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './home.component';
import { AllHComponent } from './allh.component';
import { FeatureComponent } from './feature.component';
import { HotelComponent } from './hotel.component';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { HotelService } from './service/hotel.service';
import { CityService } from './service/city.service';

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        CityService,
        HotelService
    ]
})
@RouteConfig([
        {
            path: '/home',
            name: 'Home',
            component: HomeComponent,
            useAsDefault: true
        }
        ,
        {
            path: '/allh',
            name: 'Allh',
            component: AllHComponent
        }
        ,
        {
            path: '/feature',
            name: 'Feature',
            component: FeatureComponent
        },
        {
            path: '/hotel',
            name: 'Hotel',
            component: HotelComponent
        }
])
export class AppComponent {
    title = 'Rest-In';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/