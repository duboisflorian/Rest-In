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
var utilisateur_service_1 = require('./service/utilisateur.service');
var Rx_1 = require('rxjs/Rx');
var CoComponent = (function () {
    function CoComponent(_router, _uService) {
        this._router = _router;
        this._uService = _uService;
    }
    CoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image = "acc1.jpg";
        Rx_1.Observable.interval(30000)
            .take(100).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            var y = Math.floor(Math.random() * 5) + 1;
            _this.image = "acc" + y + ".jpg";
        });
    };
    CoComponent.prototype.goHome = function () {
        this._router.navigate(['Home']);
    };
    CoComponent.prototype.connexion = function () {
        var _this = this;
        this._uService.verificationConnexion(this.mail, this.password).subscribe(function (data) { return _this.utilisateur = data; });
        this.sTimeout = setTimeout(function () {
            if (_this.utilisateur) {
                _this._router.navigate(['Home', { us: _this.utilisateur.id }]);
            }
            else {
                alert("Le mot de passe ou l'e-mail n'existe pas.");
                _this.mail = "";
                _this.password = "";
            }
        }, 600);
    };
    CoComponent.prototype.gotoIn = function () {
        this._router.navigate(['In']);
    };
    CoComponent = __decorate([
        core_1.Component({
            selector: 'my-co',
            templateUrl: 'app/co.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, utilisateur_service_1.UtilisateurService])
    ], CoComponent);
    return CoComponent;
}());
exports.CoComponent = CoComponent;
//# sourceMappingURL=co.component.js.map