import { PokemonService } from './../../services/pokemon.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { share } from 'rxjs';
import { APIData } from 'src/app/interface/data.interface';
import { Deck } from 'src/app/interface/deck.interface';
import { PokemonCard } from 'src/app/interface/pokemon.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  @ViewChild('modal') modal: any

  isOpened: boolean = false
  resultSearch?: APIData
  cardsSelected?: PokemonCard[] = []
  form  = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
    cover: new FormControl('', Validators.minLength(23))
  })
  constructor(
    private modalService: NgbModal,
    private pokemon: PokemonService,
    private renderer: Renderer2
    ) {

  }

  ngOnInit(): void {

   }

  async open(data: string): Promise<void> {
    this.search('')
    if (!this.isOpened) {
      this.modalService.open(this.modal, { size: 'xg', centered: true });
      this.isOpened = true;
    } else {
      this.isOpened = false
    }
  }
  close(modal: any) {
    modal.close();
    this.isOpened = false;
  }

  search(event: any){
    console.log(event.value)
    let sch = ''
    if(event.value != '' && event.value?.length >= 3){
      sch = 'name:'+event.value
    }
    this.pokemon.getCards(sch, 1, 200).subscribe({
      next: res => {
        this.resultSearch = res
        console.log(this.resultSearch);

      }
    })
  }

  select(card: PokemonCard){
    console.log(card);

    const qtName = this.cardsSelected?.filter(el => el.name == card.name).length
    const qtId = this.cardsSelected?.filter(el => el.id == card.id).length
    if( qtName! < 4 && qtId! < 1){
      this.cardsSelected?.push(card)
    }else{
      // pode exibir uma msg
    }
  }
  remove(index: number){
    this.cardsSelected?.splice(index, 1)
  }

  save(modal: any){
    if (this.form.valid && this.cardsSelected!.length >= 24){
      const deck: Deck = {
        id: Math.random(),
        name: this.form.controls.name.value!,
        listCards: this.cardsSelected!,
        cover: this.form.controls.cover.value!
      }
      let listDecks = JSON.parse(localStorage.getItem('deckOfCards')!)
      if(listDecks){

        localStorage.setItem('deckOfCards', JSON.stringify([...listDecks , deck]))
      }else{
        localStorage.setItem('deckOfCards', JSON.stringify([ deck]))

      }

      this.close(modal)// deve redirencionar para list de cards atualizada
      location.reload()
    }else{
      //apresentar o toast de alerta
    }
  }



  toggleValidation(index: number, id: string) {
    const elementoDesejado = document.getElementById('val'+index+id)


    if (elementoDesejado?.classList.contains('hidden')) {
      elementoDesejado.classList.remove('hidden')
    } else {
      elementoDesejado?.classList.add('hidden')
    }
  }
}
