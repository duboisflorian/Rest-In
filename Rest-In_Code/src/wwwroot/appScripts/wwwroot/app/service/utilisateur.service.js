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
require('rxjs/add/operator/map'); // we need to import this now
var UtilisateurService = (function () {
    function UtilisateurService(http) {
        this.http = http;
    }
    UtilisateurService.prototype.verificationConnexion = function (mail, password) {
        return this.http.get('http://127.0.0.1:8000/pollsAPI/usersauth/' + mail + '/' + password)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService = __decorate([
        // we need to import this now
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UtilisateurService);
    return UtilisateurService;
}());
exports.UtilisateurService = UtilisateurService;
//# sourceMappingURL=utilisateur.service.js.map