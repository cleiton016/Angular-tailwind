import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIData } from 'src/app/interface/data.interface';
import { PokemonCard } from 'src/app/interface/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-deck-show',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './deck-show.component.html',
  styleUrls: ['./deck-show.component.css']
})


export class DeckShowComponent {

  @ViewChild('deckView') deckView: any
  cardsNumber = 0;
  pokemonNumber = 0;
  pokemonList: any = [];
  colorsNumber = 0;
  typesNumber = 0;
  typesList: any = [];
  isOpened: boolean = false
  resultSearch = [
    {
      "id": "smp-SM109",
      "name": "Ash's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Agility",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn."
        },
        {
          "name": "Thunder",
          "cost": [
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Flip a coin. If tails, this Pokémon does 20 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM109",
      "artist": "2017 Pikachu Project",
      "rarity": "Promo",
      "flavorText": "This form of Pikachu is somewhat rare. It wears the hat of its Trainer, who is also its partner.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM109.png",
        "large": "https://images.pokemontcg.io/smp/SM109_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM109",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 7.98,
            "mid": 17.3,
            "high": 30,
            "market": 21.29,
            "directLow": 17.97
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM109",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 6.39,
          "lowPrice": 3,
          "trendPrice": 7.31,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 2.3,
          "lowPriceExPlus": 3,
          "avg1": 9.25,
          "avg7": 8.8,
          "avg30": 8.38,
          "reverseHoloAvg1": 2.3,
          "reverseHoloAvg7": 5.1,
          "reverseHoloAvg30": 5.1
        }
      }
    },
    {
      "id": "smp-SM111",
      "name": "Ash's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Quick Attack",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "Flip a coin. If heads, this attack does 10 more damage."
        },
        {
          "name": "Volt Tackle",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "This Pokémon does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM111",
      "artist": "2017 Pikachu Project",
      "rarity": "Promo",
      "flavorText": "This form of Pikachu is somewhat rare. It wears the hat of its Trainer, who is also its partner.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM111.png",
        "large": "https://images.pokemontcg.io/smp/SM111_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM111",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 6.99,
            "mid": 11.07,
            "high": 30,
            "market": 11.52,
            "directLow": 7.42
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM111",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 5.59,
          "lowPrice": 2,
          "trendPrice": 8.61,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 7.97,
          "lowPriceExPlus": 2,
          "avg1": 8,
          "avg7": 7.43,
          "avg30": 7.24,
          "reverseHoloAvg1": 9.99,
          "reverseHoloAvg7": 10.66,
          "reverseHoloAvg30": 10.66
        }
      }
    },
    {
      "id": "smp-SM112",
      "name": "Ash's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Quick Attack",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "Flip a coin. If heads, this attack does 10 more damage."
        },
        {
          "name": "Electro Ball",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM112",
      "artist": "2017 Pikachu Project",
      "rarity": "Promo",
      "flavorText": "This form of Pikachu is somewhat rare. It wears the hat of its Trainer, who is also its partner.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM112.png",
        "large": "https://images.pokemontcg.io/smp/SM112_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM112",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 5.8,
            "mid": 9.23,
            "high": 19.99,
            "market": 10.2,
            "directLow": 7.38
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM112",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 6.5,
          "lowPrice": 2.5,
          "trendPrice": 8.04,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 2.11,
          "lowPriceExPlus": 3,
          "avg1": 7.5,
          "avg7": 8.64,
          "avg30": 7.38,
          "reverseHoloAvg1": 2.3,
          "reverseHoloAvg7": 2.43,
          "reverseHoloAvg30": 2.43
        }
      }
    },
    {
      "id": "smp-SM113",
      "name": "Ash's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Iron Tail",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20×",
          "text": "Flip a coin until you get tails. This attack does 20 damage for each heads."
        },
        {
          "name": "Electro Ball",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM113",
      "artist": "2017 Pikachu Project",
      "rarity": "Promo",
      "flavorText": "This form of Pikachu is somewhat rare. It wears the hat of its Trainer, who is also its partner.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM113.png",
        "large": "https://images.pokemontcg.io/smp/SM113_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM113",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 6.99,
            "mid": 9,
            "high": 22,
            "market": 9.27,
            "directLow": 7.07
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM113",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 6.09,
          "lowPrice": 1.5,
          "trendPrice": 6.71,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 3.12,
          "lowPriceExPlus": 2,
          "avg1": 6.75,
          "avg7": 6.19,
          "avg30": 6.93,
          "reverseHoloAvg1": 5,
          "reverseHoloAvg7": 2.51,
          "reverseHoloAvg30": 2.51
        }
      }
    },
    {
      "id": "smp-SM108",
      "name": "Ash's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "I Choose You!",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
        },
        {
          "name": "Thunderbolt",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning"
          ],
          "convertedEnergyCost": 3,
          "damage": "100",
          "text": "Discard all Energy from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM108",
      "artist": "2017 Pikachu Project",
      "rarity": "Promo",
      "flavorText": "This Pikachu is wearing its Trainer's cap. Since the cap's not the right size, the fit is a bit loose.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM108.png",
        "large": "https://images.pokemontcg.io/smp/SM108_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM108",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 8.89,
            "mid": 13.01,
            "high": 19.99,
            "market": 13.02,
            "directLow": 14.46
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM108",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 12.25,
          "lowPrice": 0.99,
          "trendPrice": 10.45,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 13.2,
          "lowPriceExPlus": 4.7,
          "avg1": 9.88,
          "avg7": 9.86,
          "avg30": 11.17,
          "reverseHoloAvg1": 14.99,
          "reverseHoloAvg7": 18.24,
          "reverseHoloAvg30": 5.36
        }
      }
    },
    {
      "id": "smp-SM110",
      "name": "Ash's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Iron Tail",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20×",
          "text": "Flip a coin until you get tails. This attack does 20 damage for each heads."
        },
        {
          "name": "Thunder",
          "cost": [
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Flip a coin. If tails, this Pokémon does 20 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM110",
      "artist": "2017 Pikachu Project",
      "rarity": "Promo",
      "flavorText": "This form of Pikachu is somewhat rare. It wears the hat of its Trainer, who is also its partner.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM110.png",
        "large": "https://images.pokemontcg.io/smp/SM110_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM110",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 6.49,
            "mid": 9.4,
            "high": 14.99,
            "market": 9.96,
            "directLow": 7.83
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM110",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 5.46,
          "lowPrice": 2,
          "trendPrice": 6.99,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 7.38,
          "lowPriceExPlus": 2,
          "avg1": 3.8,
          "avg7": 6.46,
          "avg30": 6.22,
          "reverseHoloAvg1": 5,
          "reverseHoloAvg7": 5,
          "reverseHoloAvg30": 5
        }
      }
    },
    {
      "id": "smp-SM114",
      "name": "Ash's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Iron Tail",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20×",
          "text": "Flip a coin until you get tails. This attack does 20 damage for each heads."
        },
        {
          "name": "Thunderbolt",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning"
          ],
          "convertedEnergyCost": 3,
          "damage": "100",
          "text": "Discard all Energy from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM114",
      "artist": "2017 Pikachu Project",
      "rarity": "Promo",
      "flavorText": "This form of Pikachu is somewhat rare. It wears the hat of its Trainer, who is also its partner.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM114.png",
        "large": "https://images.pokemontcg.io/smp/SM114_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM114",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 5.87,
            "mid": 8.85,
            "high": 30,
            "market": 9.69,
            "directLow": 6.75
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM114",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 6.41,
          "lowPrice": 1.95,
          "trendPrice": 7.72,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 15.37,
          "lowPriceExPlus": 2.5,
          "avg1": 8,
          "avg7": 8.04,
          "avg30": 7.42,
          "reverseHoloAvg1": 14.99,
          "reverseHoloAvg7": 10.79,
          "reverseHoloAvg30": 10.79
        }
      }
    },
    {
      "id": "smp-SM190",
      "name": "Detective Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "90",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Coffee Break",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 30 damage from this Pokémon."
        },
        {
          "name": "Corkscrew Punch",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM190",
      "artist": "Framestore",
      "rarity": "Promo",
      "flavorText": "He was the partner of Tim's father, Harry, who has gone missing. This Pikachu loves the dark coffee at the Hi-Hat Cafe.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM190.png",
        "large": "https://images.pokemontcg.io/smp/SM190_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM190",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 0.45,
            "mid": 1,
            "high": 5,
            "market": 1.1,
            "directLow": 0.94
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM190",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 2.96,
          "lowPrice": 0.99,
          "trendPrice": 2.7,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 3.03,
          "lowPriceExPlus": 1,
          "avg1": 5.9,
          "avg7": 3.86,
          "avg30": 2.91,
          "reverseHoloAvg1": 2.87,
          "reverseHoloAvg7": 3.64,
          "reverseHoloAvg30": 4.6
        }
      }
    },
    {
      "id": "smp-SM170",
      "name": "Detective Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "90",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Scout",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Your opponent reveals their hand."
        },
        {
          "name": "Surprise Attack",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Flip a coin. If tails, this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM170",
      "rarity": "Promo",
      "flavorText": "He loves to show off his vast knowledge. This expressive Pikachu is like a middle-aged man.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM170.png",
        "large": "https://images.pokemontcg.io/smp/SM170_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM170",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 24.78,
            "mid": 29.05,
            "high": 33.31,
            "market": 25.91,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM170",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 22.5,
          "lowPrice": 11.99,
          "trendPrice": 22.46,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 20.51,
          "lowPriceExPlus": 23,
          "avg1": 25,
          "avg7": 27.04,
          "avg30": 27.71,
          "reverseHoloAvg1": 20,
          "reverseHoloAvg7": 19.17,
          "reverseHoloAvg30": 14.4
        }
      }
    },
    {
      "id": "det1-10",
      "name": "Detective Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "90",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Scout",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Your opponent reveals their hand."
        },
        {
          "name": "Surprise Attack",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Flip a coin. If tails, this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "det1",
        "name": "Detective Pikachu",
        "series": "Sun & Moon",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DET",
        "releaseDate": "2019/04/05",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/det1/symbol.png",
          "logo": "https://images.pokemontcg.io/det1/logo.png"
        }
      },
      "number": "10",
      "artist": "MPC Film",
      "rarity": "Rare",
      "flavorText": "He loves to show off his vast knowledge. This expressive Pikachu is like a middle-aged man.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/det1/10.png",
        "large": "https://images.pokemontcg.io/det1/10_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/det1-10",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 0.99,
            "mid": 2.55,
            "high": 9.99,
            "market": 2.42,
            "directLow": 2.66
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/det1-10",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 6.22,
          "lowPrice": 1,
          "trendPrice": 6.73,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 8,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 8.91,
          "lowPriceExPlus": 1.99,
          "avg1": 8.18,
          "avg7": 6.66,
          "avg30": 5.57,
          "reverseHoloAvg1": 5,
          "reverseHoloAvg7": 8.44,
          "reverseHoloAvg30": 6.07
        }
      }
    },
    {
      "id": "smp-SM194",
      "name": "Detective Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "90",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Brilliant Deduction",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Look at the top 4 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "smp",
        "name": "SM Black Star Promos",
        "series": "Sun & Moon",
        "printedTotal": 248,
        "total": 250,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PR-SM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/smp/symbol.png",
          "logo": "https://images.pokemontcg.io/smp/logo.png"
        }
      },
      "number": "SM194",
      "artist": "MPC Film",
      "rarity": "Promo",
      "flavorText": "Skilled in deduction, he's a self-proclaimed \"great detective.\" His detective hat is his trademark.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/smp/SM194.png",
        "large": "https://images.pokemontcg.io/smp/SM194_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/smp-SM194",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 1.5,
            "mid": 2.5,
            "high": 4.99,
            "market": 2.4,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/smp-SM194",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 4.13,
          "lowPrice": 1.5,
          "trendPrice": 3.73,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 6.33,
          "lowPriceExPlus": 2.95,
          "avg1": 3,
          "avg7": 3.76,
          "avg30": 3.36,
          "reverseHoloAvg1": 4.7,
          "reverseHoloAvg7": 5.83,
          "reverseHoloAvg30": 4.96
        }
      }
    },
    {
      "id": "xy12-110",
      "name": "Flying Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "12",
      "hp": "40",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Thunder Shock",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
        },
        {
          "name": "Fly",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn."
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy12",
        "name": "Evolutions",
        "series": "XY",
        "printedTotal": 108,
        "total": 113,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "EVO",
        "releaseDate": "2016/11/02",
        "updatedAt": "2020/09/25 10:09:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy12/symbol.png",
          "logo": "https://images.pokemontcg.io/xy12/logo.png"
        }
      },
      "number": "110",
      "artist": "Toshinao Aoki",
      "rarity": "Rare Secret",
      "flavorText": "By learning how to fly, Pikachu overcame its weakness to Fighting Pokémon.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy12/110.png",
        "large": "https://images.pokemontcg.io/xy12/110_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy12-110",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 0.7,
            "mid": 1.5,
            "high": 9.95,
            "market": 1.23,
            "directLow": 2.15
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy12-110",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 3.52,
          "lowPrice": 0.49,
          "trendPrice": 3.38,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 10.69,
          "lowPriceExPlus": 1.2,
          "avg1": 2.4,
          "avg7": 3.22,
          "avg30": 3.24,
          "reverseHoloAvg1": 5,
          "reverseHoloAvg7": 14.05,
          "reverseHoloAvg30": 6.62
        }
      }
    },
    {
      "id": "pl2-113",
      "name": "Flying Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "12",
      "hp": "40",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Thundershock",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Fly",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Flying Pikachu during your opponent's next turn."
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pl2",
        "name": "Rising Rivals",
        "series": "Platinum",
        "printedTotal": 111,
        "total": 120,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "RR",
        "releaseDate": "2009/05/16",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl2/symbol.png",
          "logo": "https://images.pokemontcg.io/pl2/logo.png"
        }
      },
      "number": "113",
      "artist": "Toshinao Aoki",
      "rarity": "Rare Secret",
      "flavorText": "By learning how to fly, Pikachu overcame its weakness to Fighting Pokémon.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl2/113.png",
        "large": "https://images.pokemontcg.io/pl2/113_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl2-113",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 40.38,
            "mid": 95.01,
            "high": 105,
            "market": 95.19,
            "directLow": 95.02
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl2-113",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 28.98,
          "lowPrice": 5,
          "trendPrice": 20.56,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 35,
          "reverseHoloTrend": 63.56,
          "lowPriceExPlus": 15,
          "avg1": 40,
          "avg7": 21.71,
          "avg30": 21.8,
          "reverseHoloAvg1": 75,
          "reverseHoloAvg7": 29.68,
          "reverseHoloAvg30": 15.88
        }
      }
    },
    {
      "id": "basep-25",
      "name": "Flying Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "12",
      "hp": "40",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Thundershock",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Fly",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Flying Pikachu; if tails, this attack does nothing (not even damage)."
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "basep",
        "name": "Wizards Black Star Promos",
        "series": "Base",
        "printedTotal": 53,
        "total": 53,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR",
        "releaseDate": "1999/07/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/basep/symbol.png",
          "logo": "https://images.pokemontcg.io/basep/logo.png"
        }
      },
      "number": "25",
      "artist": "Toshinao Aoki",
      "rarity": "Promo",
      "flavorText": "By learning how to fly, Pikachu overcame its weakness to Fighting Pokémon.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/basep/25.png",
        "large": "https://images.pokemontcg.io/basep/25_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/basep-25",
        "updatedAt": "2024/01/05",
        "prices": {
          "normal": {
            "low": 18.5,
            "mid": 28.49,
            "high": 30,
            "market": 29.24,
            "directLow": 28.49
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/basep-25",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 12.71,
          "lowPrice": 1.29,
          "trendPrice": 2.09,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 1.83,
          "lowPriceExPlus": 5.49,
          "avg1": 3.31,
          "avg7": 9.15,
          "avg30": 11.6,
          "reverseHoloAvg1": 2.01,
          "reverseHoloAvg7": 1.68,
          "reverseHoloAvg30": 1.68
        }
      }
    },
    {
      "id": "cel25-6",
      "name": "Flying Pikachu V",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "V"
      ],
      "hp": "190",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "rules": [
        "V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards."
      ],
      "attacks": [
        {
          "cost": [
            "Lightning"
          ],
          "name": "Thunder Shock",
          "damage": "20",
          "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
          "convertedEnergyCost": 1
        },
        {
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "name": "Fly",
          "damage": "120",
          "text": "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
          "convertedEnergyCost": 3
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "set": {
        "id": "cel25",
        "name": "Celebrations",
        "series": "Sword & Shield",
        "printedTotal": 25,
        "total": 25,
        "legalities": {
          "unlimited": "Legal",
          "standard": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CEL",
        "releaseDate": "2021/10/08",
        "updatedAt": "2022/10/11 21:39:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/cel25/symbol.png",
          "logo": "https://images.pokemontcg.io/cel25/logo.png"
        }
      },
      "number": "6",
      "artist": "aky CG Works",
      "rarity": "Rare Holo V",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "standard": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "E",
      "images": {
        "small": "https://images.pokemontcg.io/cel25/6.png",
        "large": "https://images.pokemontcg.io/cel25/6_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/cel25-6",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 0.45,
            "mid": 1,
            "high": 10,
            "market": 0.82,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/cel25-6",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 0.98,
          "lowPrice": 0.3,
          "trendPrice": 1.01,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 0.3,
          "avg1": 1.05,
          "avg7": 1,
          "avg30": 1.02,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "cel25-7",
      "name": "Flying Pikachu VMAX",
      "supertype": "Pokémon",
      "subtypes": [
        "VMAX"
      ],
      "hp": "310",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Flying Pikachu V",
      "evolvesTo": [
        "Raichu"
      ],
      "rules": [
        "VMAX rule: When your Pokémon VMAX is Knocked Out, your opponent takes 3 Prize cards."
      ],
      "attacks": [
        {
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "name": "Max Balloon",
          "damage": "160",
          "text": "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
          "convertedEnergyCost": 3
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "set": {
        "id": "cel25",
        "name": "Celebrations",
        "series": "Sword & Shield",
        "printedTotal": 25,
        "total": 25,
        "legalities": {
          "unlimited": "Legal",
          "standard": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CEL",
        "releaseDate": "2021/10/08",
        "updatedAt": "2022/10/11 21:39:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/cel25/symbol.png",
          "logo": "https://images.pokemontcg.io/cel25/logo.png"
        }
      },
      "number": "7",
      "artist": "aky CG Works",
      "rarity": "Rare Holo VMAX",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal",
        "standard": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "E",
      "images": {
        "small": "https://images.pokemontcg.io/cel25/7.png",
        "large": "https://images.pokemontcg.io/cel25/7_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/cel25-7",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 0.98,
            "mid": 2,
            "high": 12.95,
            "market": 1.45,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/cel25-7",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 1.66,
          "lowPrice": 0.95,
          "trendPrice": 1.82,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 0.95,
          "avg1": 1.5,
          "avg7": 1.66,
          "avg30": 1.69,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "gym2-84",
      "name": "Lt. Surge's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "10",
      "hp": "40",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Quick Attack",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "10+",
          "text": "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "set": {
        "id": "gym2",
        "name": "Gym Challenge",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G2",
        "releaseDate": "2000/10/16",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym2/symbol.png",
          "logo": "https://images.pokemontcg.io/gym2/logo.png"
        }
      },
      "number": "84",
      "artist": "Atsuko Nishida",
      "rarity": "Common",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym2/84.png",
        "large": "https://images.pokemontcg.io/gym2/84_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym2-84",
        "updatedAt": "2024/01/05",
        "prices": {
          "1stEdition": {
            "low": 4.94,
            "mid": 7.65,
            "high": 11.4,
            "market": 8.8,
            "directLow": 6.04
          },
          "unlimited": {
            "low": 1.2,
            "mid": 2.96,
            "high": 15.45,
            "market": 3.21,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym2-84",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 4.85,
          "lowPrice": 0.8,
          "trendPrice": 4.24,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 2.5,
          "avg1": 2.49,
          "avg7": 4.86,
          "avg30": 4.86,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "gym1-81",
      "name": "Lt. Surge's Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "15",
      "hp": "50",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Charge",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Take 1 Lightning Energy card from your discard pile and attach it to Lt. Surge's Pikachu."
        },
        {
          "name": "Lightning Tail",
          "cost": [
            "Lightning",
            "Lightning"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "gym1",
        "name": "Gym Heroes",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G1",
        "releaseDate": "2000/08/14",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym1/symbol.png",
          "logo": "https://images.pokemontcg.io/gym1/logo.png"
        }
      },
      "number": "81",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym1/81.png",
        "large": "https://images.pokemontcg.io/gym1/81_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym1-81",
        "updatedAt": "2024/01/05",
        "prices": {
          "1stEdition": {
            "low": 5.85,
            "mid": 8.72,
            "high": 14.99,
            "market": 9.32,
            "directLow": 5.5
          },
          "unlimited": {
            "low": 0.85,
            "mid": 1.25,
            "high": 22,
            "market": 1.41,
            "directLow": 0.99
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym1-81",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 2.96,
          "lowPrice": 0.5,
          "trendPrice": 5.44,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 1.5,
          "lowPriceExPlus": 1.45,
          "avg1": 1.49,
          "avg7": 5.02,
          "avg30": 2.88,
          "reverseHoloAvg1": 1.5,
          "reverseHoloAvg7": 3.25,
          "reverseHoloAvg30": 3.25
        }
      }
    },
    {
      "id": "np-12",
      "name": "Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Agility",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Pikachu during your opponent's next turn."
        },
        {
          "name": "Thundershock",
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "np",
        "name": "Nintendo Black Star Promos",
        "series": "NP",
        "printedTotal": 40,
        "total": 40,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR-NP",
        "releaseDate": "2003/10/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/np/symbol.png",
          "logo": "https://images.pokemontcg.io/np/logo.png"
        }
      },
      "number": "12",
      "artist": "Kouki Saitou",
      "rarity": "Promo",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/np/12.png",
        "large": "https://images.pokemontcg.io/np/12_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/np-12",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 10.41,
            "mid": 20,
            "high": 73.53,
            "market": 26.91,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/np-12",
        "updatedAt": "2024/01/05",
        "prices": {
          "averageSellPrice": 52.79,
          "lowPrice": 19,
          "trendPrice": 42.73,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 57.69,
          "lowPriceExPlus": 39.95,
          "avg1": 59,
          "avg7": 40.74,
          "avg30": 43.77,
          "reverseHoloAvg1": 29.95,
          "reverseHoloAvg7": 43.55,
          "reverseHoloAvg30": 36.66
        }
      }
    },
    {
      "id": "hsp-HGSS03",
      "name": "Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Recharge",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, search your deck for a Lightning Energy card and attach it to Pikachu. Shuffle your deck afterward."
        },
        {
          "name": "Thunderbolt",
          "cost": [
            "Lightning",
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "100",
          "text": "Discard all Energy attached to Pikachu."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+10"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "hsp",
        "name": "HGSS Black Star Promos",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 25,
        "total": 25,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR-HS",
        "releaseDate": "2010/02/10",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hsp/symbol.png",
          "logo": "https://images.pokemontcg.io/hsp/logo.png"
        }
      },
      "number": "HGSS03",
      "artist": "Kanako Eo",
      "rarity": "Promo",
      "flavorText": "It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hsp/HGSS03.png",
        "large": "https://images.pokemontcg.io/hsp/HGSS03_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hsp-HGSS03",
        "updatedAt": "2024/01/05",
        "prices": {
          "holofoil": {
            "low": 1.25,
            "mid": 3.25,
            "high": 22,
            "market": 3.75,
            "directLow": 1.71
          }
        }
      }
    }
  ]
  cardsSelected?: PokemonCard[] = []
  constructor(
    private modalService: NgbModal,
    private pokemon: PokemonService
  ) {
  }
  ngOnInit(): void {
    for (let index = 0; index < this.resultSearch.length; index++) {
      this.cardsNumber = this.resultSearch.length
      this.colorsNumber = this.resultSearch.length
      this.pokemonList.push(this.resultSearch[index].name)
      this.typesList.push(this.resultSearch[index].types)
    }
    const setUnico = new Set(this.pokemonList);
    this.pokemonList = [...setUnico];
    this.pokemonNumber = this.pokemonList.length;
    this.typesNumber = this.typesList.length;
  }

  async open(data: string): Promise<void> {
    if (!this.isOpened) {
      this.modalService.open(this.deckView, { size: 'xg', centered: true });
      this.isOpened = true;
    } else {
      this.isOpened = false
    }
  }
  close(modal: any) {
    modal.close();
    this.isOpened = false;
  }
}
