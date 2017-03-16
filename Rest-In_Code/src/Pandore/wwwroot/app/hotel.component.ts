import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { UtilisateurH } from './classe/utilisateur';
import { HotelAvance } from './classe/hotel';
import { RoomDispo } from './classe/room';
import { RoomTypeRoom } from './classe/roomtype';
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
    rt: HotelAvance = {
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
    };
    formrt: boolean = false;
    formroom: boolean = false;
    formdispo: boolean = false;
    formdadddispo: boolean = false;
    name: string;
    price: string;
    desc: string;
    start: Date;
    end: Date;
    nom: string;
    floor: string;
    message: string;
    selectadddispo: number;
    selectrt: number;
    rooms: RoomTypeRoom = {
        "id": 1,
        "rooms": [
            {
                "id": 1,
                "room_name": "101",
                "room_floor": 1 ,
                "room_type": 1
            }
        ],
        "type_name": "",
        "type_desc": "",
        "type_price": 126.0,
        "hotel": 1
    };

    dispos: RoomDispo = {
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
    };

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
        }, 200);
        this.sTimeout = setTimeout(() => {
            this.selectrt = this.rt.roomtypes[0].id;
            this._hService.getRoomsByRT(this.selectrt)
                .subscribe(data => this.rooms = data);
        }, 300);
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

    formRT() {
        this.formrt = true;
    }

    formRoom() {
        this.formroom = true;
    }

    formAddDipos(id: number) {
        this.selectadddispo = id;
        this.formdadddispo = true;
    }

    

    formDispo(id: number) {
        this._hService.afficherdispo(id)
            .subscribe(data => this.dispos = data);

        this.sTimeout = setTimeout(() => {
            this.formdispo = true;
        }, 200);

    }

    closeRT() {
        this.formrt = false;
        this.name = "";
        this.desc = "";
        this.price = "";
    }

    closeRoom() {
        this.formroom = false;
        this.nom = "";
        this.floor = "";
    }

    closeDispo() {
        this.formdispo = false;
    }

    closeAddDispo() {
        this.formdadddispo = false;
        this.start = null;
        this.end=null;
    }

    addRT() {
        this._hService.addRT(this.name, this.desc, this.price, this.userh.hotel[0].id)
            .subscribe(data => this.message = data);
        this.closeRT();
        this.sTimeout = setTimeout(() => {
            this._hService.getHotelWithRoomTypes(this.userh.hotel[0].id)
                .subscribe(data => this.rt = data);
        }, 400);
    }

    deleteRT(id:number) {
        this._hService.deleteRT(id)
            .subscribe(data => this.message = data);
        this.sTimeout = setTimeout(() => {
            this._hService.getHotelWithRoomTypes(this.userh.hotel[0].id)
                .subscribe(data => this.rt = data);
        }, 400);
    }
    changeselectrt() {
        this._hService.getRoomsByRT(this.selectrt)
            .subscribe(data => this.rooms = data);
    }

    deleteRoom(id: number) {
        this._hService.deleteRoom(id)
            .subscribe(data => this.message = data);
        this.sTimeout = setTimeout(() => {
            this._hService.getRoomsByRT(this.selectrt)
                .subscribe(data => this.rooms = data);
        }, 400);
    }

    deleteDispo(id: number) {
        this._hService.deleteDispo(id)
            .subscribe(data => this.message = data);
        this.sTimeout = setTimeout(() => {
            this._hService.afficherdispo(this.selectadddispo)
                .subscribe(data => this.dispos = data);
        }, 300);
    }

    addRoom() {
        this._hService.addRoom(this.nom, this.floor, this.rooms.id)
            .subscribe(data => this.message = data);
        this.closeRoom();
        this.sTimeout = setTimeout(() => {
            this._hService.getRoomsByRT(this.selectrt)
                .subscribe(data => this.rooms = data);
        }, 400);
    }

    addDispo() {
        this._hService.addDispo(this.start, this.end, this.selectadddispo)
            .subscribe(data => this.message = data);
        this.closeAddDispo();
    }

}
