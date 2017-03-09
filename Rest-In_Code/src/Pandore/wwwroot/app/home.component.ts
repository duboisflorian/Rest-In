import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'my-home',
    templateUrl: 'app/home.component.html'
})
export class HomeComponent  {

    image: string;
    search: string;


    constructor(
        private _router: Router) { }

    ngOnInit() {
        this.image = "acc1.jpg";
        Observable.interval(30000)
            .take(100).map((x) => x + 1)
            .subscribe((x) => {
                var y=Math.floor(Math.random() * 5) + 1  
                this.image = "acc"+ y +".jpg";
            });
    }

    goAllH() {
        this._router.navigate(['Allh', { id: this.search }]);
    }
    goFeature() {
        this._router.navigate(['Feature']);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*///Unexpected directive value 'undefined' on the View of component 