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

    v: City;
    sTimeout: any;

    constructor(
        private _router: Router,
        private _hotelService: HotelService,
        private _routeParams: RouteParams,
        private _cityService: CityService) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._cityService.getCity(id)
            .subscribe(data => this.v = data);
        this.sTimeout = setTimeout(() => {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: this.v.city_lat, lng: this.v.city_long }
                //center: { lat: 48.855808, lng: 2.357699 }
            });
           /* for (var i = 0, a = 1; i < this.v.hotels.length; i++ , a++) {
                this.marker[a] = new google.maps.Marker({
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    position: { lat: this.v.hotels[i].hotel_lat, lng: this.v.hotels[i].hotel_long },
                    title: this.v.hotels[i].hotel_name
                });

                 this.infowindow[a] = new google.maps.InfoWindow({
                    content: this.v.hotels[i].hotel_name
                });

               this.marker[a].addListener('click', function () {
                   this.infowindow[a].open(map, this.marker[a]);
                });
            }*/
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
                /*google.maps.event.addListener(markers[i], 'click', function () {
                    infos[i].open(map, markers[i]);
                })*/
            }

        }, 150);

    }

}
