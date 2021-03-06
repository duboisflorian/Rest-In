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
var InComponent = (function () {
    function InComponent(_router, _uService) {
        this._router = _router;
        this._uService = _uService;
    }
    InComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image = "acc1.jpg";
        Rx_1.Observable.interval(30000)
            .take(100).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            var y = Math.floor(Math.random() * 5) + 1;
            _this.image = "acc" + y + ".jpg";
        });
    };
    InComponent.prototype.inscription = function () {
        var _this = this;
        if (this.password == this.confirmPasword) {
            this._uService.verificationMailExist(this.mail).subscribe(function (data) { return _this.message = data; });
            this.sTimeout = setTimeout(function () {
                if (_this.message == "existe") {
                    alert("L'adresse mail existe déjà");
                }
                else {
                    _this._uService.ajouterUtilisateur(_this.name, _this.mail, _this.password).subscribe(function (data) { return _this.message = data; });
                    _this._router.navigate(['Home']);
                }
            }, 600);
        }
        else {
            alert("Les mots de passe ne sont pas identiques");
        }
    };
    InComponent.prototype.gotoCo = function () {
        this._router.navigate(['Co']);
    };
    InComponent = __decorate([
        core_1.Component({
            selector: 'my-in',
            templateUrl: 'app/in.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, utilisateur_service_1.UtilisateurService])
    ], InComponent);
    return InComponent;
}());
exports.InComponent = InComponent;
//# sourceMappingURL=in.component.js.map