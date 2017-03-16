import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class HotelService {

    constructor(
        private http: Http) { } 

    getAll() {
      /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/hotels.json')
            .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/hotels.json')
            .map(data => data.json());
    }

    getCity(i: number) {
     /*   return this.http.get('http://127.0.0.1:8000/pollsAPI/hotels/' + i + '.json')
            .map(data => data.json());*/
        return this.http.get('http://172.16.14.52:8000/pollsAPI/hotels/' + i + '.json')
            .map(data => data.json());
    }

    getHotelWithRoomTypes(i: number) {
        /*return this.http.get('http://127.0.0.1:8000/pollsAPI/hotels_roomtypes/' + i + '.json')
            .map(data => data.json());*/

        return this.http.get('http://172.16.14.52:8000/pollsAPI/hotels_roomtypes/' + i + '.json')
            .map(data => data.json());
    }

    getChambreByHotel(i: number) {
       /* return this.http.get('http://127.0.0.1:8000/pollsAPI/rtimages/' + i + '.json')
            .map(data => data.json());*/

        return this.http.get('http://172.16.14.52:8000/pollsAPI/rtimages/' + i + '.json')
            .map(data => data.json());
    }

    addRT(name: string, desc: string, price: string, id: number) {
     /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/addrt/' + name  +'/' + desc + '/' + price + '/' + id )
            .map(data => data.json());*/

        return this.http.get('http://172.16.14.52:8000/pollsAPI/addrt/' + name + '/' + desc + '/' + price + '/' + id)
           .map(data => data.json());
    }

    deleteRT( id: number) {
       /* return this.http.delete('http://127.0.0.1:8000/pollsAPI/roomtypes/' + id).map(data => data.json());*/

        return this.http.delete('http://172.16.14.52:8000/pollsAPI/roomtypes/' + id).map(data => data.json());
    }

    deleteRoom(id: number) {
        /* return this.http.delete('http://127.0.0.1:8000/pollsAPI/room/' + id).map(data => data.json());*/

        return this.http.delete('http://172.16.14.52:8000/pollsAPI/room/' + id).map(data => data.json());
    }

    getRoomsByRT(id: number) {
       /* return this.http.get('http://127.0.0.1:8000/pollsAPI/roomtypesroom/' + id).map(data => data.json());*/

        return this.http.get('http://172.16.14.52:8000/pollsAPI/roomtypesroom/' + id).map(data => data.json());
    }

    addRoom(name: string, floor: string,id: number) {
        /*  return this.http.get('http://127.0.0.1:8000/pollsAPI/addrt/' + name  +'/' + desc + '/' + price + '/' + id )
               .map(data => data.json());*/

        return this.http.get('http://172.16.14.52:8000/pollsAPI/addroom/' + name + '/' + floor + '/' + id)
            .map(data => data.json());
    }
}