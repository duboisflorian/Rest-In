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
var utilisateur_service_1 = require('./service/utilisateur.service');
var router_2 = require('angular2/router');
var FeatureComponent = (function () {
    function FeatureComponent(_router, _routeParams, _uService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._uService = _uService;
        this.us = 0;
        this.us_type = 0;
    }
    FeatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us = +this._routeParams.get('us');
        if (this.us != 0)
            this._uService.getUserType(this.us)
                .subscribe(function (data) { return _this.us_type = data; });
        this.image = "acc1.jpg";
        Rx_1.Observable.interval(30000)
            .take(100).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            var y = Math.floor(Math.random() * 5) + 1;
            _this.image = "acc" + y + ".jpg";
        });
    };
    FeatureComponent.prototype.goHome = function () {
        if (this.us != 0)
            this._router.navigate(['Home', { us: this.us }]);
        else
            this._router.navigate(['Home']);
    };
    FeatureComponent.prototype.gotoCo = function () {
        this._router.navigate(['Co']);
    };
    FeatureComponent.prototype.gotoDeco = function () {
        this._router.navigate(['Home']);
    };
    FeatureComponent.prototype.goHotel = function () {
        if (this.us != 0)
            this._router.navigate(['Hotel', { us: this.us }]);
        else
            this._router.navigate(['Hotel']);
    };
    FeatureComponent.prototype.goReservation = function () {
        if (this.us != 0)
            this._router.navigate(['Reservation', { us: this.us }]);
        else
            this._router.navigate(['Reservation']);
    };
    FeatureComponent = __decorate([
        core_1.Component({
            selector: 'my-feature', providers: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app/feature.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, utilisateur_service_1.UtilisateurService])
    ], FeatureComponent);
    return FeatureComponent;
}());
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=feature.component.js.map