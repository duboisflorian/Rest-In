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
var http_1 = require('angular2/http');
var HotelService = (function () {
    function HotelService(http) {
        this.http = http;
    }
    HotelService.prototype.getAll = function () {
        /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/hotels.json')
              .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/hotels.json')
            .map(function (data) { return data.json(); });
    };
    HotelService.prototype.getCity = function (i) {
        /*   return this.http.get('http://127.0.0.1:8000/pollsAPI/hotels/' + i + '.json')
               .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/hotels/' + i + '.json')
            .map(function (data) { return data.json(); });
    };
    HotelService.prototype.getHotelWithRoomTypes = function (i) {
        /*return this.http.get('http://127.0.0.1:8000/pollsAPI/hotels_roomtypes/' + i + '.json')
            .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/hotels_roomtypes/' + i + '.json')
            .map(function (data) { return data.json(); });
    };
    HotelService.prototype.getChambreByHotel = function (i) {
        /* return this.http.get('http://127.0.0.1:8000/pollsAPI/rtimages/' + i + '.json')
             .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/rtimages/' + i + '.json')
            .map(function (data) { return data.json(); });
    };
    HotelService.prototype.addRT = function (name, desc, price, id) {
        /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/addrt/' + name  +'/' + desc + '/' + price + '/' + id )
               .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/addrt/' + name + '/' + desc + '/' + price + '/' + id)
            .map(function (data) { return data.json(); });
    };
    HotelService.prototype.deleteRT = function (id) {
        /* return this.http.delete('http://127.0.0.1:8000/pollsAPI/roomtypes/' + id).map(data => data.json());*/
        return this.http.delete('http://172.16.14.52:8000/pollsAPI/roomtypes/' + id).map(function (data) { return data.json(); });
    };
    HotelService.prototype.deleteRoom = function (id) {
        /* return this.http.delete('http://127.0.0.1:8000/pollsAPI/room/' + id).map(data => data.json());*/
        return this.http.delete('http://172.16.14.52:8000/pollsAPI/room/' + id).map(function (data) { return data.json(); });
    };
    HotelService.prototype.getRoomsByRT = function (id) {
        /* return this.http.get('http://127.0.0.1:8000/pollsAPI/roomtypesroom/' + id).map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/roomtypesroom/' + id).map(function (data) { return data.json(); });
    };
    HotelService.prototype.addRoom = function (name, floor, id) {
        /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/addrt/' + name + '/' + floor + '/' + id )
               .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/addroom/' + name + '/' + floor + '/' + id)
            .map(function (data) { return data.json(); });
    };
    HotelService.prototype.afficherdispo = function (id) {
        /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/roomDispo/' + id )
               .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/roomDispo/' + id)
            .map(function (data) { return data.json(); });
    };
    HotelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HotelService);
    return HotelService;
}());
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map