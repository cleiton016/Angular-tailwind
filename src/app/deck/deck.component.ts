import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit } from '@angular/core';
import { Deck } from '../interface/deck.interface';
import { FormComponent } from "./form/form.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-deck',
    standalone: true,
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormComponent
    ]
})
export class DeckComponent implements OnInit {
    @ViewChild('modal') modal: any
    decks: Deck[] = []

    constructor (private modalService: NgbModal){}
    ngOnInit(): void {   
        this.setup()
     }

     setup(){
        this.decks = JSON.parse(localStorage.getItem('deckOfCards')!)   
     }

    newDeck(data: Deck){
        this.decks.push(data)
        localStorage.setItem('decksOfCards', JSON.stringify(this.decks))
    }
    openModal(modal: any) {
        modal.open()
      }


}
