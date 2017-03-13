import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { HotelService } from './service/hotel.service';
import { CityService } from './service/city.service';
import { Hotel } from './classe/hotel';
import { City } from './classe/city';
import { RouteParams } from 'angular2/router';
declare var google: any;
import {Headers} from 'angular2/http';

@Component({
    selector: 'my-allh', providers: [HTTP_PROVIDERS],
    templateUrl: 'app/allh.component.html'
})

export class AllHComponent {

    v: City = { "id": 1, "hotels": [{ "id": 1, "hotel_name": "", "hotel_desc": "", "hotel_lat": 0, "hotel_long": 0, "adr": "", "image": "", "stars": 0, "city": 1 }], "city_name": "", "city_lat": 0, "city_long": 0 };
    sTimeout: any;

    constructor(
        private _router: Router,
        private _hotelService: HotelService,
        private _routeParams: RouteParams,
        private _cityService: CityService) { this.initialiseCity(); }

    initialiseCity() {
        let id = +this._routeParams.get('id');
        this._cityService.getCityH(id)
            .subscribe(data => this.v = data);
    }

    onClickMe() {
        this._router.navigate(['Allh', { cities: this.v }]);
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._cityService.getCityH(id)
            .subscribe(data => this.v = data);
        this.sTimeout = setTimeout(() => {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: this.v.city_lat, lng: this.v.city_long }
            });
            var markers = [];
            var infos = [];
            for (var i = 0; i < this.v.hotels.length; i++) {
                var pos = new google.maps.LatLng(this.v.hotels[i].hotel_lat, this.v.hotels[i].hotel_long);

                markers[i] = new google.maps.Marker({
                    position: pos,
                    map: map,
                });

                infos[i] = new google.maps.InfoWindow({
                    content: this.v.hotels[i].hotel_name
                });

                infos[i].open(map, markers[i]);
            }

        }, 150);

    }

}
