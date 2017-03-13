import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './home.component';
import { AllHComponent } from './allh.component';
import { CoComponent } from './co.component';
import { InComponent } from './in.component';
import { FeatureComponent } from './feature.component';
import { HotelComponent } from './hotel.component';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { HotelService } from './service/hotel.service';
import { CityService } from './service/city.service';
import { UtilisateurService } from './service/utilisateur.service';

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
        UtilisateurService,
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
            path: '/co',
            name: 'Co',
            component: CoComponent
        },
        {
            path: '/in',
            name: 'In',
            component: InComponent
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
