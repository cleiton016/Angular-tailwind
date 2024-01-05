import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, finalize } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {
  protected url: string = environment.apiUrl
  constructor( protected httpClient: HttpClient ) {}
  
  protected getHeader(){
    return new HttpHeaders({
      'X-Api-Key': environment.apiKey
    })
  }

  post<T>(path: string, data: T): Observable<any> {
    return this.httpClient.post<T>(`${this.url}${path}`, data, {headers: this.getHeader()} )
      .pipe(
        map( data => data as T),
        finalize( () => console.info('post success') )
      )
  }

  put<T>(path: string, data: T): Observable<any> {
    return this.httpClient.put<T>(`${this.url}${path}`, data, {headers: this.getHeader()} )
      .pipe(
        map( data => data as T),
        finalize( () => console.info('put success') )
      )
  }

  get<T>(path: string): Observable<any> {
    return this.httpClient.get<T>(`${this.url}${path}`, {headers: this.getHeader()})
      .pipe(
        map( data => data as T),
        finalize( () => console.info('get success') )
      )
  }

  delete(path: string) {
    return this.httpClient.delete(`${this.url}${path}`, {headers: this.getHeader()})
  }

}
