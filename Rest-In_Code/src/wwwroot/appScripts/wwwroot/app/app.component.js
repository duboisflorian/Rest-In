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
var home_component_1 = require('./home.component');
var allh_component_1 = require('./allh.component');
var feature_component_1 = require('./feature.component');
var http_1 = require('angular2/http');
var hotel_service_1 = require('./service/hotel.service');
var city_service_1 = require('./service/city.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Rest-In';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                city_service_1.CityService,
                hotel_service_1.HotelService
            ]
        }),
        router_1.RouteConfig([
            {
                path: '/home',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: '/allh',
                name: 'Allh',
                component: allh_component_1.AllHComponent
            },
            {
                path: '/feature',
                name: 'Feature',
                component: feature_component_1.FeatureComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map