import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class HotelService {

    constructor(
        private http: Http) { }

    getAll() {
        return this.http.get('http://127.0.0.1:8000/pollsAPI/hotels.json')
            .map(data => data.json());
    }

    getCity(i: number) {
        return this.http.get('http://127.0.0.1:8000/pollsAPI/hotels/' + i + '.json')
            .map(data => data.json());
    }

}