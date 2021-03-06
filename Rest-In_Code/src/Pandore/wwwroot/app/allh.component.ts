﻿import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { HotelService } from './service/hotel.service';
import { CityService } from './service/city.service';
import { Hotel } from './classe/hotel';
import { HotelAvance } from './classe/hotel';
import { RoomTypeAvance } from './classe/roomtype';
import { RoomImage } from './classe/roomimage';
import { City } from './classe/city';
import { RouteParams } from 'angular2/router';
declare var google: any;
import {Headers} from 'angular2/http';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';
import { RoomDispo, RoomReserv } from './classe/room';

@Component({
    selector: 'my-allh', providers: [HTTP_PROVIDERS],
    templateUrl: 'app/allh.component.html'
})

export class AllHComponent {

    v: City = { "id": 1, "hotels": [{ "id": 1, "hotel_name": "", "hotel_desc": "", "hotel_lat": 0, "hotel_long": 0, "adr": "", "image": "", "stars": 0, "city": 1, "hotelier": 1 }], "city_name": "", "city_lat": 0, "city_long": 0 };
    roomtypes: HotelAvance[] = [{
        "id": 1,
        "roomtypes": [{
            "id": 1,
            "images": [
                {
                    "id": 1,
                    "image_path": "https://q-ec.bstatic.com/images/hotel/max1024x768/499/49930212.jpg",
                    "room_type": 1
                }
            ],
            "type_name": "Chambre Standard",
            "type_desc": "Des chambres cosy et fonctionnelles au décor classique pour des séjours privés ou professionnels au cœur de Paris. Elles possèdent tout le confort dont vous avez besoin",
            "type_price": 126.0,
            "hotel": 1
        }],
        "hotel_name": "Hotel Victoria Chatelet",
        "hotel_desc": "Hotel Victoria Chatelet",
        "hotel_lat": 48.857841,
        "hotel_long": 2.346736,
        "adr": "17 Avenue Victoria",
        "image": "http://www.hotel-victoria-chatelet.com/media/img/home/vignette3.jpg",
        "stars": 3.0,
        "city": 1,
        "hotelier": 1
    }];
    chambre: RoomTypeAvance[] = [{
        "id": 1,
        "images": [{
            "id": 1,
            "image_path": "https://q-ec.bstatic.com/images/hotel/max1024x768/499/49930212.jpg",
            "room_type": 1
        }],
        "type_name": "Chambre Standard",
        "type_desc": "Des chambres cosy et fonctionnelles au décor classique pour des séjours privés ou professionnels au cœur de Paris. Elles possèdent tout le confort dont vous avez besoin",
        "type_price": 126.0,
        "hotel": 1
    }];

    chambreb: RoomTypeAvance[] = [{
        "id": 1,
        "images": [{
            "id": 1,
            "image_path": "https://q-ec.bstatic.com/images/hotel/max1024x768/499/49930212.jpg",
            "room_type": 1
        }],
        "type_name": "Chambre Standard",
        "type_desc": "Des chambres cosy et fonctionnelles au décor classique pour des séjours privés ou professionnels au cœur de Paris. Elles possèdent tout le confort dont vous avez besoin",
        "type_price": 126.0,
        "hotel": 1
    }];

    dispos: RoomDispo[] = [{
        "id": 1,
        "dispo": [
            {
                "id": 1,
                "dispo_start": "2017-03-01",
                "dispo_end": "2018-03-01",
                "room": 1
            }
        ],
        "room_name": "101",
        "room_floor": 1.0,
        "room_type": 1
    }];

    reservs: RoomReserv[] = [{
        "id": 1,
        "reserv": [
            {
                "id": 1,
                "reserv_start": "2017-04-01",
                "reserv_end": "2017-04-15",
                "room": 1,
                "client": 7
            }
        ],
        "room_name": "101",
        "room_floor": 1.0,
        "room_type": 1
    }];

    detailshotel: boolean = false;
    recherche: boolean = false;
    detailschambre: boolean = false;
    search: string;
    reserve: boolean = false;
    cities: City[];
    sTimeout: any;
    c: City;
    image: string;
    us: number = 0;
    us_type: number = 0;
    act: number = 0;
    nb_image: number = 0;
    start: Date;
    end: Date;
    message: string;

    constructor(
        private _router: Router,
        private _hotelService: HotelService,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService,
        private _cityService: CityService) { }

    onClickMe(v: Hotel) {
        this.detailshotel = true;
        this._hotelService.getHotelWithRoomTypes(v.id)
            .subscribe(data => this.roomtypes = data);        
    }
    afficherdetails(id: number) {
        this.reserve = false;
        this.start = null;
        this.end = null;
        if (id != 999) {
            this.detailschambre = false;
            this.act = id;
            this.chambre[0].type_name = "";
            this.chambre[0].type_desc= "";
            this.nb_image = 0;
            this._hotelService.getChambreByHotel(id)
                .subscribe(data => this.chambreb = data);
            this.sTimeout = setTimeout(() => {
            if (this.chambreb[0].images.length == 0) {
                this.chambre = this.chambreb;
                this.chambre[0].images[0] = {
                    "id": 1,
                    "image_path": "https://q-ec.bstatic.com/images/hotel/max1024x768/499/49930212.jpg",
                    "room_type": 1
                };
                this.nb_image = 0;
            } else {
                this.chambre = this.chambreb;
                this.nb_image = this.chambre[0].images.length;
            }

            }, 200);
            this.detailschambre = true;
        }else {
            this.detailschambre = false;
        }
    }

    reserver() {
        this.reserve = true;
    }

    transform(date: string) {
        return new Date(date);
    }

    reserverchambre() {
        this._hotelService.afficherdispobyRT(this.act)
            .subscribe(data => this.dispos = data);   
        this._hotelService.afficherreservbyRT(this.act)
            .subscribe(data => this.reservs = data); 

        this.sTimeout = setTimeout(() => {
            alert("reserv");
            //pour chaque chambre dispo
            for (var a = 0; a < this.dispos.length; a++) {

                // si il y a une dispo
                if (this.dispos[a].dispo.length > 0) {

                    // pour chaque dispo
                    for (var b = 0; b < this.dispos[a].dispo.length; b++) {

                        // si les dates sont comprisent dans la dispo
                        if ((this.start.toString() >= this.dispos[a].dispo[b].dispo_start && this.start.toString() <= this.dispos[a].dispo[b].dispo_end) && (this.end.toString() >= this.dispos[a].dispo[b].dispo_start && this.end.toString() <= this.dispos[a].dispo[b].dispo_end)) {

                            //alors on regarde pour chaque chambre les réservations
                            for (var c = 0; c < this.reservs.length; c++) {

                                // si c'est la meme chambre
                                if (this.dispos[a].id == this.reservs[c].id) {

                                    //si il y a pas de reservation
                                    if (this.reservs[c].reserv.length == 0) {

                                        //creer reservation
                                        this._hotelService.addReserv(this.start, this.end, this.dispos[a].id, this.us)
                                            .subscribe(data => this.message = data);
                                        //exit
                                        break;
                                    } else {

                                       var ct = 0;

                                        // pour chaque reservation
                                        for (var d = 0; d < this.reservs[c].reserv.length; d++) {

                                            // si les dates sont pas comprise dans les reservations
                                            if ((this.start.toString() < this.reservs[c].reserv[d].reserv_start || this.start.toString() > this.reservs[c].reserv[d].reserv_end) && (this.end.toString() < this.reservs[c].reserv[d].reserv_start || this.end.toString() > this.reservs[c].reserv[d].reserv_end)) {

                                            } else {
                                                ct++;
                                            }

                                        }

                                        //si il y a pas de reservation durant cette période
                                        if (ct == 0) {
                                            //creer reservation
                                            this._hotelService.addReserv(this.start, this.end, this.dispos[a].id,this.us)
                                                .subscribe(data => this.message = data);
                                            //exit
                                            break;
                                        }

                                    }
                                }
                            }
                       }
                    }
                }
            }
        }, 500);
        // il n'y a pas de place
    }

    ngOnInit() {
        let x = +this._routeParams.get('us');
        this.us = x;


        if (this.us != 0)
            this._uService.getUserType(this.us)
                .subscribe(data => this.us_type = data);

        this._cityService.getAll()
            .subscribe(data => this.cities = data);

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
    goHome() {
        if (this.us != 0)
            this._router.navigate(['Home', { us: this.us }]);
        else
            this._router.navigate(['Home']);
    }
    gotoCo() {
        this._router.navigate(['Co']);
    }
    gotoDeco() {
        this._router.navigate(['Home']);
    }
    goHotel() {
        if (this.us != 0)
            this._router.navigate(['Hotel', { us: this.us }]);
        else
            this._router.navigate(['Hotel']);
    }
    goReservation() {
        if (this.us != 0)
            this._router.navigate(['Reservation', { us: this.us }]);
        else
            this._router.navigate(['Reservation']);
    }

    ChangeSearch() {
        var found = 0;
        for (var i = 0; i < this.cities.length; i++) {
            if (this.cities[i].city_name == this.search) {
                found += 1;
                this.c = this.cities[i];
            }
        }
        if (found == 1) {
            if (this.us != 0)
                this._router.navigate(['Allh', { id: this.c.id, us: this.us }]);
            else
                this._router.navigate(['Allh', { id: this.c.id }]);
        }
        else
            alert("No city found");
    }

}
