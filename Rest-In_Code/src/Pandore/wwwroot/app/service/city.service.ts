﻿import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class CityService {

    constructor(
        private http: Http) { }

    getAll() {
        return this.http.get('http://127.0.0.1:8000/pollsAPI/cities.json')
            .map(data => data.json());
    }

    getCity(i: number) {
        return this.http.get('http://127.0.0.1:8000/pollsAPI/cities/' + i + '.json')
            .map(data => data.json());
    }

}