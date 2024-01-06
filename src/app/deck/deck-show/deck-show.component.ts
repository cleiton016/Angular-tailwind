import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, ViewChild } from '@angular/core';
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
  styleUrls: ['./deck-show.component.scss']
})


export class DeckShowComponent {

  @ViewChild('deckView') deckView: any
  @Input('deckSelected') deckSelected: any
  cardsNumber = 0;
  pokemonNumber = 0;
  pokemonList: any = [];
  colorsNumber = 0;
  typesNumber = 0;
  typesList: any = [];
  cardList: any = [];
  isOpened: boolean = false
  resultSearch: any = [];
  cardsSelected?: PokemonCard[] = []
  constructor(
    private modalService: NgbModal,
    private pokemon: PokemonService
  ) {
  }

  async open(data: string): Promise<void> {
    if (!this.isOpened) {
      this.resultSearch.push(data)
      this.modalService.open(this.deckView, { size: 'xg', centered: true });
      this.isOpened = true;
    } else {
      this.isOpened = false
    }
    this.change()
  }
  close(modal: any) {
    this.pokemonList = []
    this.typesList = []
    this.pokemonNumber = 0;
    this.typesNumber = 0;
    this.cardsNumber = 0;
    this.colorsNumber = 0;
    modal.close();
    this.isOpened = false;
  }
  change() {
    for (let index = 0; index < this.resultSearch[0]?.listCards.length; index++) {
      this.cardsNumber = this.resultSearch[0]?.listCards.length
      this.colorsNumber = this.resultSearch[0]?.listCards.length
      this.pokemonList.push(this.resultSearch[0]?.listCards[index]?.name)
      this.typesList.push(this.resultSearch[0]?.listCards[index]?.types)
      this.cardList = this.resultSearch[0]?.listCards
    }
    const setUnico = new Set(this.pokemonList);
    this.pokemonList = [...setUnico];
    this.pokemonNumber = this.pokemonList.length;
    this.typesNumber = this.typesList.length;
  }
}
