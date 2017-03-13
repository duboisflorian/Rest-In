import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class UtilisateurService {

    constructor(
        private http: Http) { }

  

}
