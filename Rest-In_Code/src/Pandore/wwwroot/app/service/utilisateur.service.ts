import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class UtilisateurService {

    constructor(
        private http: Http) { }

    ip: string = "http://172.16.16.130:8000/";
 //   ip: string = "http://127.0.0.1:8000/";
  //  ip: string = "";

    verificationConnexion(mail: string, password: string) {

     return this.http.get(this.ip + 'pollsAPI/usersauth/' + mail + '/' + password)
            .map(data => data.json());
    }

    verificationMailExist(mail: string) {

        return this.http.get(this.ip + 'pollsAPI/verifmail/' + mail)
            .map(data => data.json());
    }

    ajouterUtilisateur(name: string, mail: string, password: string) {


        return this.http.get(this.ip + 'pollsAPI/ajoutuser/' + name + '/' + mail + '/' + password)
            .map(data => data.json());
    }

    getUserType(id: number) {


        return this.http.get(this.ip + 'pollsAPI/usertype/' + id)
            .map(data => data.json());
    }

    getUserH(id: number) {

        return this.http.get(this.ip + 'pollsAPI/userh/' + id)
            .map(data => data.json());
    }
    
}
