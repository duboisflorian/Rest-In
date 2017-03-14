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
var AllHComponent = (function () {
    function AllHComponent(_router, _hotelService, _routeParams, _cityService) {
        this._router = _router;
        this._hotelService = _hotelService;
        this._routeParams = _routeParams;
        this._cityService = _cityService;
        this.v = { "id": 1, "hotels": [{ "id": 1, "hotel_name": "", "hotel_desc": "", "hotel_lat": 0, "hotel_long": 0, "adr": "", "image": "", "stars": 0, "city": 1 }], "city_name": "", "city_lat": 0, "city_long": 0 };
        this.roomtypes = [{
                "id": 1,
                "roomtypes": [
                    {
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
                    },
                    {
                        "id": 2,
                        "images": [
                            {
                                "id": 4,
                                "image_path": "https://media-cdn.tripadvisor.com/media/photo-s/03/d8/51/07/hotel-victoria-chatelet.jpg",
                                "room_type": 2
                            }
                        ],
                        "type_name": "Chambre Supérieure",
                        "type_desc": "Doubles ou twin, joliment décorées et colorées, elles invitent à la douceur de vivre au cœur du 1er arrondissement. Les atouts de la capitale… le calme et la convivialité en plus !",
                        "type_price": 170.0,
                        "hotel": 1
                    }
                ],
                "hotel_name": "Hotel Victoria Chatelet",
                "hotel_desc": "Hotel Victoria Chatelet",
                "hotel_lat": 48.857841,
                "hotel_long": 2.346736,
                "adr": "17 Avenue Victoria",
                "image": "http://www.hotel-victoria-chatelet.com/media/img/home/vignette3.jpg",
                "stars": 3.0,
                "city": 1
            }];
        this.detailshotel = false;
        this.detailschambre = false;
        this.onglethotel = true;
        this.ongletchambre = false;
        this.us = 0;
    }
    AllHComponent.prototype.onClickMe = function (v) {
        var _this = this;
        this.detailshotel = true;
        this._hotelService.getHotelWithRoomTypes(v.id)
            .subscribe(function (data) { return _this.roomtypes = data; });
    };
    AllHComponent.prototype.afficherdetails = function (id) {
        if (id != 999) {
            this.detailschambre = true;
        }
        else {
            this.detailschambre = false;
        }
    };
    AllHComponent.prototype.gotoCo = function () {
        this._router.navigate(['Co']);
    };
    AllHComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = +this._routeParams.get('us');
        this.us = x;
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
    AllHComponent.prototype.goAllH = function () {
        var id = +this._routeParams.get('id');
        this._router.navigate(['Allh', { id: id }]);
    };
    AllHComponent.prototype.goHome = function () {
        if (this.us != 0)
            this._router.navigate(['Home', { us: this.us }]);
        else
            this._router.navigate(['Home']);
    };
    AllHComponent = __decorate([
        core_1.Component({
            selector: 'my-allh', providers: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app/allh.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, hotel_service_1.HotelService, router_2.RouteParams, city_service_1.CityService])
    ], AllHComponent);
    return AllHComponent;
}());
exports.AllHComponent = AllHComponent;
//# sourceMappingURL=allh.component.js.map