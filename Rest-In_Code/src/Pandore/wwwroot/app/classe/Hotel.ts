import { RoomTypeAvance } from './roomtype';

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