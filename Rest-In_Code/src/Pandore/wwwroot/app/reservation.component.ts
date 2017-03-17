import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';
import { RouteParams } from 'angular2/router';
import { HotelService } from './service/hotel.service';
import { HotelReservation, Reservation} from './classe/hotel';


@Component({
    selector: 'my-reservation', providers: [HTTP_PROVIDERS],
    templateUrl: 'app/reservation.component.html'
})

export class ReservationComponent {
    image: string;
    utilisateur: Utilisateur;
    sTimeout: any;
    us: number = 0;
    us_type: number = 0;
    ct: number = 0;
    prix: number = 0;
    reservs : HotelReservation[] = [
        {
            "id": 1,
            "roomtypes": [
                {
                    "id": 1,
                    "rooms": [
                        {
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
                        },
                        {
                            "id": 3,
                            "reserv": [],
                            "room_name": "102",
                            "room_floor": 2.0,
                            "room_type": 1
                        }
                    ],
                    "type_name": "Chambre Standard",
                    "type_desc": "Des chambres cosy et fonctionnelles au décor classique pour des séjours privés ou professionnels au cœur de Paris. Elles possèdent tout le confort dont vous avez besoin",
                    "type_price": 126.0,
                    "hotel": 1
                },
                {
                    "id": 2,
                    "rooms": [
                        {
                            "id": 2,
                            "reserv": [],
                            "room_name": "303",
                            "room_floor": 3.0,
                            "room_type": 2
                        }
                    ],
                    "type_name": "Chambre Supérieure",
                    "type_desc": "",
                    "type_price": 170.0,
                    "hotel": 1
                }
            ],
            "hotel_name": "Hotel Victoria Chatelet",
            "hotel_desc": "Hotel Victoria Chatelet",
            "hotel_lat": 48.857841,
            "hotel_long": 2.346736,
            "adr": "17 Avenue Victoria",
            "image": "",
            "stars": 3.0,
            "city": 1,
            "hotelier": 1
        }
    ];
    res: Reservation[];
    resb: Reservation[] = [];
    test: Reservation = {
        "id": 1,
        "hotel": "",
        "debut": "",
        "fin": "",
        "type": "",
    };

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _hotelService: HotelService,
        private _uService: UtilisateurService) { }

    ngOnInit() {
        this.us = +this._routeParams.get('us');

        if (this.us != 0)
            this._uService.getUserType(this.us)
                .subscribe(data => this.us_type = data);

        this.image = "acc1.jpg";
        Observable.interval(30000)
            .take(100).map((x) => x + 1)
            .subscribe((x) => {
                var y = Math.floor(Math.random() * 5) + 1
                this.image = "acc" + y + ".jpg";
            });

        this._hotelService.afficherreservbyUser(this.us)
            .subscribe(data => this.reservs = data);  

        this.sTimeout = setTimeout(() => {
            this.resb = [];
            this.ct = 0;
            this.prix = 0;
            for (var a = 0; a < this.reservs.length; a++) {
                for (var b = 0; b < this.reservs[a].roomtypes.length; b++) {
                    for (var c = 0; c < this.reservs[a].roomtypes[b].rooms.length; c++) {
                        for (var d = 0; d < this.reservs[a].roomtypes[b].rooms[c].reserv.length; d++) {
                            if (this.reservs[a].roomtypes[b].rooms[c].reserv[d].client == this.us) {

                                this.ct = this.ct + 1;
                                alert(this.ct);
                                this.test.id = this.ct;
                                this.test.hotel = this.reservs[a].hotel_name;
                                this.test.debut = this.reservs[a].roomtypes[b].rooms[c].reserv[d].reserv_start;
                                this.test.fin = this.reservs[a].roomtypes[b].rooms[c].reserv[d].reserv_end;
                                this.test.type = this.reservs[a].roomtypes[b].type_name;
                                this.resb.push(this.test);
                            }
                        }
                    }
                }
            }
            this.res = this.resb;
        }, 500);
    }

    goFeature() {
        if (this.us != 0)
            this._router.navigate(['Feature', { us: this.us }]);
        else
            this._router.navigate(['Feature']);
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
}
