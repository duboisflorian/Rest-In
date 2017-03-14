import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { CityService } from './service/city.service';
import { RouteParams } from 'angular2/router';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';
import { City } from './classe/city';

@Component({
    selector: 'my-home',
    templateUrl: 'app/home.component.html'
})
export class HomeComponent  {

    image: string;
    search: string;
    cities: City[];
    c: City;
    sTimeout: any;
    utilisateur: Utilisateur;
    us: number = 0;
    us_type: number = 0;



    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService,
        private _cityService: CityService) { }

    ngOnInit() {
        let x = +this._routeParams.get('us');
        this.us = x;

        if(this.us!=0)
        this._uService.getUserType(this.us)
            .subscribe(data => this.us_type = data);

        this._cityService.getAll()
            .subscribe(data => this.cities = data);

        this.image = "acc1.jpg";
        Observable.interval(30000)
            .take(100).map((x) => x + 1)
            .subscribe((x) => {
                var y=Math.floor(Math.random() * 5) + 1  
                this.image = "acc" + y + ".jpg";
            });
    }

    goAllH() {
        var found = 0;
        for (var i = 0; i < this.cities.length; i++) {
            if (this.cities[i].city_name == this.search){
                found += 1;
                this.c = this.cities[i];
            }
        }
        if (found == 1) {
            if(this.us!=0)
                this._router.navigate(['Allh', { id: this.c.id, us: this.us }]);
            else
                this._router.navigate(['Allh', { id: this.c.id }]);
        }
        else
        alert("No city found");
    }
    goFeature() {
        if(this.us!=0)
            this._router.navigate(['Feature', { us: this.us}]);
        else
            this._router.navigate(['Feature']);
    }
    gotoCo() {
        this._router.navigate(['Co']);
    }
    goHome() {
        this._router.navigate(['Home']);
    }

    goHotel() {
        if (this.us != 0)
            this._router.navigate(['Hotel', { us: this.us }]);
        else
            this._router.navigate(['Hotel']);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*///Unexpected directive value 'undefined' on the View of component 