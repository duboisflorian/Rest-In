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
    detailshotel: boolean;
    sTimeout: any;
    image: string;
    us: number = 0;

    constructor(
        private _router: Router,
        private _hotelService: HotelService,
        private _routeParams: RouteParams,
        private _cityService: CityService) { }

    onClickMe() {
        this.detailshotel = true;
    }
    gotoCo() {
        this._router.navigate(['Co']);
    }
    
    ngOnInit() {
        this.detailshotel = false;
        let x = +this._routeParams.get('us');
        this.us = x;
        let id = +this._routeParams.get('id');
        this._cityService.getCityH(id)
            .subscribe(data => this.v = data);
        function markerMap(hotel_name: string) {
            return '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<div id="bodyContent"><font color="black">' +
                hotel_name +
                '</font></div>' +
                '</div>';
        }
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
                    content: markerMap(this.v.hotels[i].hotel_name)
                });

                infos[i].open(map, markers[i]);
            }

        }, 150);
        this.image = "acc1.jpg";
        Observable.interval(30000)
            .take(100).map((x) => x + 1)
            .subscribe((x) => {
                var y = Math.floor(Math.random() * 5) + 1
                this.image = "acc" + y + ".jpg";
            });

    }
    goAllH() {
        let id = +this._routeParams.get('id');
        this._router.navigate(['Allh', { id: id }]);
    }
    goHome() {
            if (this.us != 0)
                this._router.navigate(['Home', { us: this.us }]);
            else
                this._router.navigate(['Home']);
    }

}
