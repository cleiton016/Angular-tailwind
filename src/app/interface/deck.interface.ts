import { PokemonCard } from "./pokemon.interface"

export interface Deck {
  id: number
  name: string
  listCards: PokemonCard[]
  cover: string
}
