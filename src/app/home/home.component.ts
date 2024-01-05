import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { APIData } from '../interface/data.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    
})
export class HomeComponent implements OnInit {

    dados: APIData = new Object()
    constructor(private pokemon: PokemonService){}
    ngOnInit(): void { 

        this.pokemon.getCards('').subscribe({next: res => {
            this.dados = res
        }})
    }

}
