import { RoomD } from './roomd';

export class Room {
    id: number;
    room_type: number;
    room_name: string;
    room_floor: number;
}


export class RoomDispo {
    id: number;
    dispo: RoomD[];
    room_type: number;
    room_name: string;
    room_floor: number;
}