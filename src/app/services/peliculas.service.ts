import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-respnse';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) { }

  getCartelera(): Observable<CarteleraResponse>{
  return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=4afb96c7a47e9073921f77e33ecaec10&language=es-ES&page=1');
  }
}
