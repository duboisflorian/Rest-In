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
var city_service_1 = require('./service/city.service');
var router_2 = require('angular2/router');
var HomeComponent = (function () {
    function HomeComponent(_router, _routeParams, _cityService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._cityService = _cityService;
        this.us = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = +this._routeParams.get('us');
        this.us = x;
        this._cityService.getAll()
            .subscribe(function (data) { return _this.cities = data; });
        this.image = "acc1.jpg";
        Rx_1.Observable.interval(30000)
            .take(100).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            var y = Math.floor(Math.random() * 5) + 1;
            _this.image = "acc" + y + ".jpg";
        });
    };
    HomeComponent.prototype.goAllH = function () {
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
    HomeComponent.prototype.goFeature = function () {
        if (this.us != 0)
            this._router.navigate(['Feature', { us: this.us }]);
        else
            this._router.navigate(['Feature']);
    };
    HomeComponent.prototype.gotoCo = function () {
        this._router.navigate(['Co']);
    };
    HomeComponent.prototype.goHome = function () {
        this._router.navigate(['Home']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: 'app/home.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, city_service_1.CityService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ //Unexpected directive value 'undefined' on the View of component  
//# sourceMappingURL=home.component.js.map