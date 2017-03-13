import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HomeComponent } from './home.component';
import { InComponent } from './in.component';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';


@Component({
    selector: 'my-co',
    templateUrl: 'app/co.component.html'
})
export class CoComponent {
    utilisateur: Utilisateur;
    mail: string;
    password: string;
    sTimeout: number;

    constructor(
        private _router: Router,
        private _uService: UtilisateurService
    ) { }


    connexion() {
     }  
}

