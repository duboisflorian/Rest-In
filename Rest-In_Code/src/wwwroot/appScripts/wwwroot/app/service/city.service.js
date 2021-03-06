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
var CityService = (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getAll = function () {
        /*    return this.http.get('http://127.0.0.1:8000/pollsAPI/cities.json')
               .map(data => data.json()); */
        return this.http.get('http://172.16.14.52:8000/pollsAPI/cities.json')
            .map(function (data) { return data.json(); });
    };
    CityService.prototype.getCity = function (i) {
        /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/cities/' + i + '.json')
             .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/cities/' + i + '.json')
            .map(function (data) { return data.json(); });
    };
    CityService.prototype.getAllH = function () {
        /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/citiesh.json')
               .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/citiesh.json')
            .map(function (data) { return data.json(); });
    };
    CityService.prototype.getCityH = function (i) {
        /*    return this.http.get('http://127.0.0.1:8000/pollsAPI/citiesh/' + i + '.json')
               .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/citiesh/' + i + '.json')
            .map(function (data) { return data.json(); });
    };
    CityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CityService);
    return CityService;
}());
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map