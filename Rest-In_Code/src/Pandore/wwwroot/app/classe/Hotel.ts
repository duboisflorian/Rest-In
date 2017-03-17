import { RoomTypeAvance, RoomTypeReservation } from './roomtype';

export class Hotel {
    id: number;
    hotel_name: string;
    hotel_desc: string;
    hotel_lat: number;
    hotel_long: number;
    adr: string;
    image: string;
    stars: number;
    city: number;
    hotelier: number;
}

export class HotelAvance {
    id: number;
    roomtypes: RoomTypeAvance[];
    hotel_name: string;
    hotel_desc: string;
    hotel_lat: number;
    hotel_long: number;
    adr: string;
    image: string;
    stars: number;
    city: number;
    hotelier: number;
}

export class HotelReservation {
    id: number;
    roomtypes: RoomTypeReservation[];
    hotel_name: string;
    hotel_desc: string;
    hotel_lat: number;
    hotel_long: number;
    adr: string;
    image: string;
    stars: number;
    city: number;
    hotelier: number;
}

export class Reservation {
    id: number;
    hotel: string;
    debut: string;
    fin: string;
    type: string;
}