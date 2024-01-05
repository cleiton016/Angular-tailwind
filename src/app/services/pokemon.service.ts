import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends AbstractService {

  constructor(private http: HttpClient) {
    super(http);
  }


  getCards(q: string, page: number=1, pageSize: number=8){
    return this.get(`cards?page=${page}&pageSize=${pageSize}&orderBy=name&q=${q}`)
  }

}
