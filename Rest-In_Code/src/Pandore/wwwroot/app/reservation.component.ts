import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';
import { RouteParams } from 'angular2/router';


@Component({
    selector: 'my-reservation', providers: [HTTP_PROVIDERS],
    templateUrl: 'app/reservation.component.html'
})

export class ReservationComponent {
    image: string;
    utilisateur: Utilisateur;
    us: number = 0;
    us_type: number = 0;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService) { }

    ngOnInit() {
        this.us = +this._routeParams.get('us');

        if (this.us != 0)
            this._uService.getUserType(this.us)
                .subscribe(data => this.us_type = data);

        this.image = "acc1.jpg";
        Observable.interval(30000)
            .take(100).map((x) => x + 1)
            .subscribe((x) => {
                var y = Math.floor(Math.random() * 5) + 1
                this.image = "acc" + y + ".jpg";
            });
    }

    goFeature() {
        if (this.us != 0)
            this._router.navigate(['Feature', { us: this.us }]);
        else
            this._router.navigate(['Feature']);
    }

    goHome() {
        if (this.us != 0)
            this._router.navigate(['Home', { us: this.us }]);
        else
            this._router.navigate(['Home']);
    }
    gotoCo() {
        this._router.navigate(['Co']);
    }
    gotoDeco() {
        this._router.navigate(['Home']);
    }
    goHotel() {
        if (this.us != 0)
            this._router.navigate(['Hotel', { us: this.us }]);
        else
            this._router.navigate(['Hotel']);
    }
}
