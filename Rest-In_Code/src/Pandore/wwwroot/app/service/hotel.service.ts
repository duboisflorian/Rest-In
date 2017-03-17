import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class HotelService {

    constructor(
        private http: Http) { } 

    ip: string = "http://172.16.16.130:8000/";
 //   ip: string = "http://127.0.0.1:8000/";

    getAll() {

      return this.http.get(this.ip + 'pollsAPI/hotels.json')
            .map(data => data.json());
    }

    getCity(i: number) {

        return this.http.get(this.ip + 'pollsAPI/hotels/' + i + '.json')
            .map(data => data.json());
    }

    getHotelWithRoomTypes(i: number) {

         return this.http.get(this.ip + 'pollsAPI/hotels_roomtypes/' + i + '.json')
            .map(data => data.json());
    }

    getChambreByHotel(i: number) {

        return this.http.get(this.ip + 'pollsAPI/rtimages/' + i + '.json')
            .map(data => data.json());
    }

    addRT(name: string, desc: string, price: string, id: number) {


       return this.http.get(this.ip + 'pollsAPI/addrt/' + name + '/' + desc + '/' + price + '/' + id)
           .map(data => data.json());
    }

    deleteRT( id: number) {

         return this.http.delete(this.ip + 'pollsAPI/roomtypes/' + id).map(data => data.json());
    }

    deleteRoom(id: number) {

        return this.http.delete(this.ip + 'pollsAPI/room/' + id).map(data => data.json());
    }

    deleteDispo(id: number) {
 
       return this.http.delete(this.ip + 'pollsAPI/roomD/' + id).map(data => data.json());
    }

    getRoomsByRT(id: number) {

       return this.http.get(this.ip + 'pollsAPI/roomtypesroom/' + id).map(data => data.json());
    }

    addRoom(name: string, floor: string,id: number) {

         return this.http.get(this.ip + 'pollsAPI/addroom/' + name + '/' + floor + '/' + id)
            .map(data => data.json());
    }

    addDispo(start: Date, end: Date, id: number) {

         return this.http.get(this.ip + 'pollsAPI/adddispo/' + start + '/' + end + '/' + id)
            .map(data => data.json());
    }

    addReserv(start: Date, end: Date, id: number,us:number) {

         return this.http.get(this.ip + 'pollsAPI/addreserv/' + start + '/' + end + '/' + id  + '/' + us)
             .map(data => data.json());
    }

    afficherdispo(id: number) {

         return this.http.get(this.ip + 'pollsAPI/roomDispo/' + id)
            .map(data => data.json());
    }

    afficherreserv(id: number) {

        return this.http.get(this.ip + 'pollsAPI/roomReserv/' + id)
            .map(data => data.json());
    }

    afficherdispobyRT(id: number) {

         return this.http.get(this.ip + 'pollsAPI/roomDispoByRT/' + id)
            .map(data => data.json());
    }

    afficherreservbyRT(id: number) {

         return this.http.get(this.ip + 'pollsAPI/roomReservByRT/' + id)
            .map(data => data.json());
    }

    afficherreservbyUser(id: number) {

        return this.http.get(this.ip + 'pollsAPI/Reservbyuser/' + id)
            .map(data => data.json());
    }
}