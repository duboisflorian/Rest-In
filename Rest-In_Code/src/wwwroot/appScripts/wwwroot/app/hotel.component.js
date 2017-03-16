"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var hotel_service_1 = require('./service/hotel.service');
var utilisateur_service_1 = require('./service/utilisateur.service');
var router_2 = require('angular2/router');
var HotelComponent = (function () {
    function HotelComponent(_router, _routeParams, _uService, _hService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._uService = _uService;
        this._hService = _hService;
        this.us = 0;
        this.rt = {
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
        this.formrt = false;
        this.formroom = false;
        this.formdispo = false;
        this.rooms = {
            "id": 1,
            "rooms": [
                {
                    "id": 1,
                    "room_name": "101",
                    "room_floor": 1,
                    "room_type": 1
                }
            ],
            "type_name": "",
            "type_desc": "",
            "type_price": 126.0,
            "hotel": 1
        };
        this.dispos = {
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
    }
    HotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = +this._routeParams.get('us');
        this.us = x;
        this._uService.getUserH(this.us)
            .subscribe(function (data) { return _this.userh = data; });
        this.sTimeout = setTimeout(function () {
            _this._hService.getHotelWithRoomTypes(_this.userh.hotel[0].id)
                .subscribe(function (data) { return _this.rt = data; });
        }, 200);
        this.sTimeout = setTimeout(function () {
            _this.selectrt = _this.rt.roomtypes[0].id;
            _this._hService.getRoomsByRT(_this.selectrt)
                .subscribe(function (data) { return _this.rooms = data; });
        }, 300);
    };
    HotelComponent.prototype.goHome = function () {
        if (this.us != 0)
            this._router.navigate(['Home', { us: this.us }]);
        else
            this._router.navigate(['Home']);
    };
    HotelComponent.prototype.gotoDeco = function () {
        this._router.navigate(['Home']);
    };
    HotelComponent.prototype.formRT = function () {
        this.formrt = true;
    };
    HotelComponent.prototype.formRoom = function () {
        this.formroom = true;
    };
    HotelComponent.prototype.formDispo = function (id) {
        var _this = this;
        this._hService.afficherdispo(id)
            .subscribe(function (data) { return _this.dispos = data; });
        this.sTimeout = setTimeout(function () {
            _this.formdispo = true;
            alert(_this.dispos.dispo[0].dispo_start);
        }, 200);
    };
    HotelComponent.prototype.closeRT = function () {
        this.formrt = false;
        this.name = "";
        this.desc = "";
        this.price = "";
    };
    HotelComponent.prototype.closeRoom = function () {
        this.formroom = false;
        this.nom = "";
        this.floor = "";
    };
    HotelComponent.prototype.closeDispo = function () {
        this.formdispo = false;
    };
    HotelComponent.prototype.addRT = function () {
        var _this = this;
        this._hService.addRT(this.name, this.desc, this.price, this.userh.hotel[0].id)
            .subscribe(function (data) { return _this.message = data; });
        this.closeRT();
        this.sTimeout = setTimeout(function () {
            _this._hService.getHotelWithRoomTypes(_this.userh.hotel[0].id)
                .subscribe(function (data) { return _this.rt = data; });
        }, 400);
    };
    HotelComponent.prototype.deleteRT = function (id) {
        var _this = this;
        this._hService.deleteRT(id)
            .subscribe(function (data) { return _this.message = data; });
        this.sTimeout = setTimeout(function () {
            _this._hService.getHotelWithRoomTypes(_this.userh.hotel[0].id)
                .subscribe(function (data) { return _this.rt = data; });
        }, 400);
    };
    HotelComponent.prototype.changeselectrt = function () {
        var _this = this;
        this._hService.getRoomsByRT(this.selectrt)
            .subscribe(function (data) { return _this.rooms = data; });
    };
    HotelComponent.prototype.deleteRoom = function (id) {
        var _this = this;
        this._hService.deleteRoom(id)
            .subscribe(function (data) { return _this.message = data; });
        this.sTimeout = setTimeout(function () {
            _this._hService.getRoomsByRT(_this.selectrt)
                .subscribe(function (data) { return _this.rooms = data; });
        }, 400);
    };
    HotelComponent.prototype.addRoom = function () {
        var _this = this;
        this._hService.addRoom(this.nom, this.floor, this.rooms.id)
            .subscribe(function (data) { return _this.message = data; });
        this.closeRoom();
        this.sTimeout = setTimeout(function () {
            _this._hService.getRoomsByRT(_this.selectrt)
                .subscribe(function (data) { return _this.rooms = data; });
        }, 400);
    };
    HotelComponent = __decorate([
        core_1.Component({
            selector: 'my-hotel', providers: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app/hotel.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, utilisateur_service_1.UtilisateurService, hotel_service_1.HotelService])
    ], HotelComponent);
    return HotelComponent;
}());
exports.HotelComponent = HotelComponent;
//# sourceMappingURL=hotel.component.js.map