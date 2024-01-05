export interface PokemonCard {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
    evolvesFrom: string;
    attacks: Attack[];
    weaknesses: Weakness[];
    resistances: Resistance[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: PokemonSet;
    number: string;
    artist: string;
    rarity: string;
    nationalPokedexNumbers: number[];
    legalities: Legalities;
    images: PokemonImages;
    tcgplayer: TCGPlayer;
    cardmarket: CardMarket;
}

interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
}

interface Weakness {
    type: string;
    value: string;
}

interface Resistance {
    type: string;
    value: string;
}

interface PokemonSet {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: SetImages;
}

interface Legalities {
    unlimited: string;
}

interface SetImages {
    symbol: string;
    logo: string;
}

interface PokemonImages {
    small: string;
    large: string;
}

interface TCGPlayer {
    url: string;
    updatedAt: string;
    prices: {
      holofoil ?: PriceInfo;
    unlimitedHolofoil ?: PriceInfo;
    };
  }

interface CardMarket {
    url: string;
    updatedAt: string;
    prices: {
        averageSellPrice: number;
        lowPrice: number;
        trendPrice: number;
        // ... other price information
    };
}

interface PriceInfo {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number | null;
}
