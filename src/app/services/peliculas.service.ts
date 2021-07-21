import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CarteleraResponse } from '../interfaces/cartelera-respnse';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  constructor( private http: HttpClient) { }

  get params(){

    return{
      api_key: '4afb96c7a47e9073921f77e33ecaec10',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  getCartelera(): Observable<CarteleraResponse>{
   
  return this.http.get<CarteleraResponse>(`${ this.baseUrl }/movie/now_playing`,{
    params: this.params
  }).pipe(
    tap(
      ()=> {
        this.carteleraPage += 1;
      }
    )
  );
  }
}
