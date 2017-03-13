import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { CoComponent } from './co.component';
import { HomeComponent } from './home.component';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';
import { Observable, Subscription } from 'rxjs/Rx';

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
    image: string;

    constructor(
        private _router: Router,
      private _uService: UtilisateurService) { }

    ngOnInit() {

        this.image = "acc1.jpg";
        Observable.interval(30000)
            .take(100).map((x) => x + 1)
            .subscribe((x) => {
                var y = Math.floor(Math.random() * 5) + 1
                this.image = "acc" + y + ".jpg";
            });
    }

    inscription() {
        if (this.password == this.confirmPasword) {
            this._uService.verificationMailExist(this.mail).subscribe(data => this.message = data);
            this.sTimeout = setTimeout(() => {
                if (this.message == "existe") {
                    alert("L'adresse mail existe déjà");
                }
                else {
                    this._uService.ajouterUtilisateur(this.name, this.mail, this.password).subscribe(data => this.message = data);
                    this._router.navigate(['Home']);
                }
            }, 600);
        } else {
            alert("Les mots de passe ne sont pas identiques");
        }
    }
    gotoCo() {
        this._router.navigate(['Co']);
    }
}
