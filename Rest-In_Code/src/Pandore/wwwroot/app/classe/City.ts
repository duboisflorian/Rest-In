import { Hotel } from './hotel';

export class City {
    id: number;
    city_name: string;
    city_lat: number;
    city_long: number;
    hotels: Hotel[];
}