import { PokemonService } from './../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  resultSearch: any
  constructor(
    private modalService: NgbModal,
    private pokemon: PokemonService
    ) {

  }
  ngOnInit(): void { }

  async open(data: string): Promise<void> {

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
    console.log(event)
    this.pokemon.getCards(event.value).subscribe({
      next: res => {
        this.resultSearch = res.data
      }
    })
  }
}
