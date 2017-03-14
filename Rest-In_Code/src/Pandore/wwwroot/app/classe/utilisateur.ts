import { Hotel } from './hotel';

export class Utilisateur {
    id: number;
    name: string;
    mail: string;
    password: string;
    type: number;
}

export class UtilisateurH {
    id: number;
    name: string;
    mail: string;
    password: string;
    type: number;
    hotel: Hotel[];
}