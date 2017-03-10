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
var city_service_1 = require('./service/city.service');
var router_2 = require('angular2/router');
var AllHComponent = (function () {
    function AllHComponent(_router, _hotelService, _routeParams, _cityService) {
        this._router = _router;
        this._hotelService = _hotelService;
        this._routeParams = _routeParams;
        this._cityService = _cityService;
        this.v = { "id": 1, "hotels": [{ "id": 1, "hotel_name": "", "hotel_desc": "", "hotel_lat": 0, "hotel_long": 0, "adr": "", "image": "", "stars": 0, "city": 1 }], "city_name": "", "city_lat": 0, "city_long": 0 };
    }
    AllHComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this._cityService.getCityH(id)
            .subscribe(function (data) { return _this.v = data; });
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
                    content: _this.v.hotels[i].hotel_name
                });
                infos[i].open(map, markers[i]);
            }
        }, 150);
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