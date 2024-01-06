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

  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
    this.setup()
  }

  setup() {
    this.decks = JSON.parse(localStorage.getItem('deckOfCards')!)
  }


  openModal(modal: any) {
    modal.open()
  }

  openViewDeck(deckView: any) {
    deckView.open()
  }

  toggleValidation(index: number, id: number) {
    const element = document.getElementById('val' + index + id)

    if (element?.classList.contains('hidden')) {
      element.classList.remove('hidden')
    } else {
      element?.classList.add('hidden')
    }

  }

}
