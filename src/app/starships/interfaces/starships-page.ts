import { Starship } from './starship';


export interface StarshipsPage {
    count: number;
    next: string;
    previous?: any;
    results: Starship[];
}