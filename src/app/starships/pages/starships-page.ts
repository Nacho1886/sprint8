import { Starship } from '../interfaces/starship';


export interface StarshipsPage {
    count: number;
    next: string;
    previous?: any;
    results: Starship[];
}