import { PokemonService } from './../../services/pokemon.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  mensagem: any;
  isOpened: boolean = false
  resultSearch?: any
  cardsSelected?: PokemonCard[] = []
  form!: FormGroup;
  edit: boolean = false
  constructor(
    private modalService: NgbModal,
    private pokemon: PokemonService,
    private renderer: Renderer2,
    private fb: FormBuilder,
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.minLength(3)),
      cover: new FormControl('', Validators.minLength(23))
    })

  }

  ngOnInit(): void {

  }

  async open(data: any): Promise<void> {
    if (data) {
      this.edit = true
      this.form = this.fb.group({
        id: data?.id,
        name: data?.name,
        cover: data?.cover,
      })
      this.cardsSelected = data?.listCards
    }
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

  search(event: any) {
    if (this.cardsSelected) {
      let sch = ''

      this.pokemon.getCards(sch, 1, 200).subscribe({
        next: res => {
          this.resultSearch = res?.data.filter((item1: any) => !this.cardsSelected?.some(item2 => item1.id === item2.id));
        }
      })
    } else {
      let sch = ''
      if (event.value != '' && event.value?.length >= 3) {
        sch = 'name:' + event.value
      }
      this.pokemon.getCards(sch, 1, 200).subscribe({
        next: res => {
          this.resultSearch = res
        }
      })
    }
  }

  select(card: PokemonCard, id: any) {
    const qtName = this.cardsSelected?.filter(el => el.name == card.name).length
    const qtId = this.cardsSelected?.filter(el => el.id == card.id).length
    if (qtName! < 4 && qtId! < 1) {
      this.cardsSelected?.push(card)
      this.resultSearch.splice(id, 1)
    } else {
      // pode exibir uma msg
      this.showToast('toast-danger', 'Só podem ter 4 cartas com o mesmo nome, no baralho. ')

    }
  }
  remove(index: number, card: PokemonCard) {
    this.cardsSelected?.splice(index, 1)
    this.resultSearch.push(card)
  }

  save(modal: any) {
    if (this.form.valid && (this.cardsSelected!.length >= 24 && this.cardsSelected!.length <= 60)) {
      this.showToast('toast-success', this.edit ? 'As modificações foram salvas' : 'Criado com Sucesso!')
      let id = 1
      if (this.form.value.id) {
        id = this.form.value.id
      } else {
        id = Math.random()
      }
      const deck: Deck = {
        id: id,
        name: this.form.value.name,
        listCards: this.cardsSelected!,
        cover: this.form.value.cover,
      }
      let listDecks = JSON.parse(localStorage.getItem('deckOfCards')!)
      if (listDecks) {
        listDecks = listDecks.filter((item: any) => item.id !== this.form.value.id)
        localStorage.setItem('deckOfCards', JSON.stringify([...listDecks, deck]))
      } else {
        localStorage.setItem('deckOfCards', JSON.stringify([deck]))
      }
      setTimeout(() => {

        this.close(modal)
        location.reload()
      }, 3000);
    } else {

      this.showToast('toast-danger', 'Minimo requerido, 24 cartas.')
    }
  }


  toggleValidation(index: number, id: string) {
    const elementoDesejado = document.getElementById('val' + index + id)


    if (elementoDesejado?.classList.contains('hidden')) {
      elementoDesejado.classList.remove('hidden')
    } else {
      elementoDesejado?.classList.add('hidden')
    }
  }

  showToast(status: string, mensagem: string) {
    var toast = document.getElementById(status);
    this.mensagem = mensagem;
    if (toast !== null) {
      toast.classList.remove('hidden');
      setTimeout(function () {
        if (toast !== null) {
          toast.classList.add('hidden');
        }
      }, 3000); // Esconde o toast após 3 segundos (3000 milissegundos)
    }
  }
}
