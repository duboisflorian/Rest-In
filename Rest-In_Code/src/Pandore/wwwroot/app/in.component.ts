import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { CoComponent } from './co.component';
import { HomeComponent } from './home.component';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';

@Component({
    selector: 'my-in',
    templateUrl: 'app/in.component.html'
})
export class InComponent {
    name: string;
    mail: string;
    password: string;
    confirmPasword: string;
    booleen: any
    message: any;
    sTimeout: number;

    constructor(
        private _router: Router,
      private _uService: UtilisateurService) { }

    inscription() {
      
    }
}
