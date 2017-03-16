import { RoomImage } from './roomimage';
import { Room } from './room';
export class RoomType {
    id: number;
    hotel: number;
    type_name: string;
    type_desc: string;
    type_price: number;
}

export class RoomTypeAvance {
    id: number;
    images: RoomImage[];
    hotel: number;
    type_name: string;
    type_desc: string;
    type_price: number;
}

export class RoomTypeRoom {
    id: number;
    rooms: Room[];
    hotel: number;
    type_name: string;
    type_desc: string;
    type_price: number;
}