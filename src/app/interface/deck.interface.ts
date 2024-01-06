import { PokemonCard } from "./pokemon.interface"

export interface Deck {
    name: string
    listCards: PokemonCard[] 
    cover: string
}