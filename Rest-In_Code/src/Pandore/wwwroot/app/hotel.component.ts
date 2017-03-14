import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { UtilisateurH } from './classe/utilisateur';
import { HotelAvance } from './classe/hotel';
import { HotelService } from './service/hotel.service';
import { UtilisateurService } from './service/utilisateur.service';
import { RouteParams } from 'angular2/router';


@Component({
    selector: 'my-hotel', providers: [HTTP_PROVIDERS],
    templateUrl: 'app/hotel.component.html'
})

export class HotelComponent {

    us: number = 0;
    userh: UtilisateurH;
    sTimeout: any;
    rt: HotelAvance[] = [{
        "id": 1,
        "roomtypes": [{
            "id": 1,
            "images": [
                {
                    "id": 1,
                    "image_path": "",
                    "room_type": 1
                }
            ],
            "type_name": "",
            "type_desc": "",
            "type_price": 126.0,
            "hotel": 1
        }],
        "hotel_name": "",
        "hotel_desc": "",
        "hotel_lat": 48.857841,
        "hotel_long": 2.346736,
        "adr": "",
        "image": "",
        "stars": 3.0,
        "city": 1,
        "hotelier": 0
    }];
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService,
        private _hService: HotelService) { }

    ngOnInit() {
        let x = +this._routeParams.get('us');
        this.us = x;
        this._uService.getUserH(this.us)
            .subscribe(data => this.userh = data);

        this.sTimeout = setTimeout(() => {
            this._hService.getHotelWithRoomTypes(this.userh.hotel[0].id)
                .subscribe(data => this.rt = data);
        }, 400);
    }

    goHome() {
        if (this.us != 0)
            this._router.navigate(['Home', { us: this.us }]);
        else
            this._router.navigate(['Home']);
    }
    gotoDeco() {
        this._router.navigate(['Home']);
    }
}
