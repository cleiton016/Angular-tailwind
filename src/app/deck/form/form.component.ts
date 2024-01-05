import { PokemonService } from './../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { share } from 'rxjs';
import { APIData } from 'src/app/interface/data.interface';
import { PokemonCard } from 'src/app/interface/pokemon.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
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
  constructor(
    private modalService: NgbModal,
    private pokemon: PokemonService
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
    this.pokemon.getCards(sch, 1, 20).subscribe({
      next: res => {
        this.resultSearch = res
        console.log(this.resultSearch);
        
      }
    })
  }

  select(card: PokemonCard){
    this.cardsSelected?.push(card)
  }
  remove(index: number){
    this.cardsSelected?.splice(index, 1)
  }
}
