import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HomeComponent } from './home.component';
import { InComponent } from './in.component';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
    selector: 'my-co',
    templateUrl: 'app/co.component.html'
})
export class CoComponent {
    utilisateur: Utilisateur;
    mail: string;
    password: string;
    sTimeout: number;
    image: string;

    constructor(
        private _router: Router,
        private _uService: UtilisateurService
    ) { }

    ngOnInit() {

        this.image = "acc1.jpg";
        Observable.interval(30000)
            .take(100).map((x) => x + 1)
            .subscribe((x) => {
                var y = Math.floor(Math.random() * 5) + 1
                this.image = "acc" + y + ".jpg";
            });
    }
    goHome() {
        this._router.navigate(['Home']);
    }
    connexion() {
    }  
    gotoIn() {
        this._router.navigate(['In']);
    }
}

