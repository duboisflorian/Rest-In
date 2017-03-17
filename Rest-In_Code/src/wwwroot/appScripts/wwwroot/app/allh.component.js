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
var Rx_1 = require('rxjs/Rx');
var http_1 = require('angular2/http');
var hotel_service_1 = require('./service/hotel.service');
var city_service_1 = require('./service/city.service');
var router_2 = require('angular2/router');
var utilisateur_service_1 = require('./service/utilisateur.service');
var AllHComponent = (function () {
    function AllHComponent(_router, _hotelService, _routeParams, _uService, _cityService) {
        this._router = _router;
        this._hotelService = _hotelService;
        this._routeParams = _routeParams;
        this._uService = _uService;
        this._cityService = _cityService;
        this.v = { "id": 1, "hotels": [{ "id": 1, "hotel_name": "", "hotel_desc": "", "hotel_lat": 0, "hotel_long": 0, "adr": "", "image": "", "stars": 0, "city": 1, "hotelier": 1 }], "city_name": "", "city_lat": 0, "city_long": 0 };
        this.roomtypes = [{
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
        this.chambre = [{
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
        this.chambreb = [{
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
        this.dispos = [{
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
        this.reservs = [{
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
        this.detailshotel = false;
        this.recherche = false;
        this.detailschambre = false;
        this.reserve = false;
        this.us = 0;
        this.us_type = 0;
        this.act = 0;
        this.nb_image = 0;
    }
    AllHComponent.prototype.onClickMe = function (v) {
        var _this = this;
        this.detailshotel = true;
        this._hotelService.getHotelWithRoomTypes(v.id)
            .subscribe(function (data) { return _this.roomtypes = data; });
    };
    AllHComponent.prototype.afficherdetails = function (id) {
        var _this = this;
        this.reserve = false;
        this.start = null;
        this.end = null;
        if (id != 999) {
            this.detailschambre = false;
            this.act = id;
            this.chambre[0].type_name = "";
            this.chambre[0].type_desc = "";
            this.nb_image = 0;
            this._hotelService.getChambreByHotel(id)
                .subscribe(function (data) { return _this.chambreb = data; });
            this.sTimeout = setTimeout(function () {
                if (_this.chambreb[0].images.length == 0) {
                    _this.chambre = _this.chambreb;
                    _this.chambre[0].images[0] = {
                        "id": 1,
                        "image_path": "https://q-ec.bstatic.com/images/hotel/max1024x768/499/49930212.jpg",
                        "room_type": 1
                    };
                    _this.nb_image = 0;
                }
                else {
                    _this.chambre = _this.chambreb;
                    _this.nb_image = _this.chambre[0].images.length;
                }
            }, 200);
            this.detailschambre = true;
        }
        else {
            this.detailschambre = false;
        }
    };
    AllHComponent.prototype.reserver = function () {
        this.reserve = true;
    };
    AllHComponent.prototype.transform = function (date) {
        return new Date(date);
    };
    AllHComponent.prototype.reserverchambre = function () {
        var _this = this;
        this._hotelService.afficherdispobyRT(this.act)
            .subscribe(function (data) { return _this.dispos = data; });
        this._hotelService.afficherreservbyRT(this.act)
            .subscribe(function (data) { return _this.reservs = data; });
        this.sTimeout = setTimeout(function () {
            alert("reserv");
            //pour chaque chambre dispo
            for (var a = 0; a < _this.dispos.length; a++) {
                // si il y a une dispo
                if (_this.dispos[a].dispo.length > 0) {
                    // pour chaque dispo
                    for (var b = 0; b < _this.dispos[a].dispo.length; b++) {
                        // si les dates sont comprisent dans la dispo
                        if ((_this.start.toString() >= _this.dispos[a].dispo[b].dispo_start && _this.start.toString() <= _this.dispos[a].dispo[b].dispo_end) && (_this.end.toString() >= _this.dispos[a].dispo[b].dispo_start && _this.end.toString() <= _this.dispos[a].dispo[b].dispo_end)) {
                            //alors on regarde pour chaque chambre les réservations
                            for (var c = 0; c < _this.reservs.length; c++) {
                                // si c'est la meme chambre
                                if (_this.dispos[a].id == _this.reservs[c].id) {
                                    //si il y a pas de reservation
                                    if (_this.reservs[c].reserv.length == 0) {
                                        //creer reservation
                                        _this._hotelService.addReserv(_this.start, _this.end, _this.dispos[a].id, _this.us)
                                            .subscribe(function (data) { return _this.message = data; });
                                        //exit
                                        break;
                                    }
                                    else {
                                        var ct = 0;
                                        // pour chaque reservation
                                        for (var d = 0; d < _this.reservs[c].reserv.length; d++) {
                                            // si les dates sont pas comprise dans les reservations
                                            if ((_this.start.toString() < _this.reservs[c].reserv[d].reserv_start || _this.start.toString() > _this.reservs[c].reserv[d].reserv_end) && (_this.end.toString() < _this.reservs[c].reserv[d].reserv_start || _this.end.toString() > _this.reservs[c].reserv[d].reserv_end)) {
                                            }
                                            else {
                                                ct++;
                                            }
                                        }
                                        //si il y a pas de reservation durant cette période
                                        if (ct == 0) {
                                            //creer reservation
                                            _this._hotelService.addReserv(_this.start, _this.end, _this.dispos[a].id, _this.us)
                                                .subscribe(function (data) { return _this.message = data; });
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
    };
    AllHComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = +this._routeParams.get('us');
        this.us = x;
        if (this.us != 0)
            this._uService.getUserType(this.us)
                .subscribe(function (data) { return _this.us_type = data; });
        this._cityService.getAll()
            .subscribe(function (data) { return _this.cities = data; });
        var id = +this._routeParams.get('id');
        this._cityService.getCityH(id)
            .subscribe(function (data) { return _this.v = data; });
        function markerMap(hotel_name) {
            return '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<div id="bodyContent"><font color="black">' +
                hotel_name +
                '</font></div>' +
                '</div>';
        }
        this.sTimeout = setTimeout(function () {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: _this.v.city_lat, lng: _this.v.city_long }
            });
            var markers = [];
            var infos = [];
            for (var i = 0; i < _this.v.hotels.length; i++) {
                var pos = new google.maps.LatLng(_this.v.hotels[i].hotel_lat, _this.v.hotels[i].hotel_long);
                markers[i] = new google.maps.Marker({
                    position: pos,
                    map: map,
                });
                infos[i] = new google.maps.InfoWindow({
                    content: markerMap(_this.v.hotels[i].hotel_name)
                });
                infos[i].open(map, markers[i]);
            }
        }, 150);
        this.image = "acc1.jpg";
        Rx_1.Observable.interval(30000)
            .take(100).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            var y = Math.floor(Math.random() * 5) + 1;
            _this.image = "acc" + y + ".jpg";
        });
    };
    AllHComponent.prototype.goHome = function () {
        if (this.us != 0)
            this._router.navigate(['Home', { us: this.us }]);
        else
            this._router.navigate(['Home']);
    };
    AllHComponent.prototype.gotoCo = function () {
        this._router.navigate(['Co']);
    };
    AllHComponent.prototype.gotoDeco = function () {
        this._router.navigate(['Home']);
    };
    AllHComponent.prototype.goHotel = function () {
        if (this.us != 0)
            this._router.navigate(['Hotel', { us: this.us }]);
        else
            this._router.navigate(['Hotel']);
    };
    AllHComponent.prototype.goReservation = function () {
        if (this.us != 0)
            this._router.navigate(['Reservation', { us: this.us }]);
        else
            this._router.navigate(['Reservation']);
    };
    AllHComponent.prototype.ChangeSearch = function () {
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
    };
    AllHComponent = __decorate([
        core_1.Component({
            selector: 'my-allh', providers: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app/allh.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, hotel_service_1.HotelService, router_2.RouteParams, utilisateur_service_1.UtilisateurService, city_service_1.CityService])
    ], AllHComponent);
    return AllHComponent;
}());
exports.AllHComponent = AllHComponent;
//# sourceMappingURL=allh.component.js.map