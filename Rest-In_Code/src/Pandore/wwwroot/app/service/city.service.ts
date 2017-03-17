import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class CityService {

    constructor(
        private http: Http) { }

    ip: string = "http://172.16.16.130:8000/";
 //   ip: string = "http://127.0.0.1:8000/";

    getAll() {
       return this.http.get(this.ip + 'pollsAPI/cities.json')
            .map(data => data.json());
    }

    getCity(i: number) {
       

         return this.http.get(this.ip + 'pollsAPI/cities/' + i + '.json')
            .map(data => data.json());
    }

    getAllH() {

        return this.http.get(this.ip + 'pollsAPI/citiesh.json')
            .map(data => data.json());
    }

    getCityH(i: number) {

       return this.http.get(this.ip + 'pollsAPI/citiesh/' + i + '.json')
            .map(data => data.json());
    }
}