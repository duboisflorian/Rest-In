import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class UtilisateurService {

    constructor(
        private http: Http) { }

    verificationConnexion(mail: string, password: string) {
        return this.http.get('http://127.0.0.1:8000/pollsAPI/usersauth/' + mail + '/' + password)
            .map(data => data.json());
    }

}
