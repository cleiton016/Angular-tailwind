import { PokemonCard } from "./pokemon.interface";

export interface APIData {
    data?: PokemonCard[];
    page?: number;
    pageSize?: number;
    count?: number;
    totalCount?: number
}