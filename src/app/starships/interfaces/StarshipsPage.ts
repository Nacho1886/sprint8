import { Starship } from './Starship';


export interface StarshipsPage {
    count: number;
    next: string;
    previous?: any;
    results: Starship[];
}