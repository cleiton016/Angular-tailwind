import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit } from '@angular/core';
import { Deck } from '../interface/deck.interface';
import { FormComponent } from "./form/form.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeckShowComponent } from './deck-show/deck-show.component';

@Component({
  selector: 'app-deck',
  standalone: true,
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormComponent,
    DeckShowComponent
  ]
})
export class DeckComponent implements OnInit {
  @ViewChild('modal') modal: any
  @ViewChild('deckView') deckView: any
  decks: Deck[] = []
  deckSelected: any
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
    this.setup()
  }

  setup() {
    this.decks = JSON.parse(localStorage.getItem('deckOfCards')!)
  }


  openModal(data: any, params: string) {
    if (params == 'edit') {
      this.modal.open(data)
    } else {
      this.modal.open()
    }
  }

  openViewDeck(item: any) {
    this.deckSelected = item
    this.deckView.open(item)
  }

  toggleValidation(index: number, object: any) {
    const element = document.getElementById('val' + index + object.id)
    if (element?.classList.contains('hidden')) {
      element.classList.remove('hidden')
    } else {
      element?.classList.add('hidden')
    }

  }
  removeDeck(item: Deck) {
    var index = this.decks.indexOf(item);
    if (index > -1) {
      this.decks.splice(index, 1);
      localStorage.removeItem('deckOfCards')
      localStorage.setItem('deckOfCards', JSON.stringify(this.decks))
    }
  }

}
