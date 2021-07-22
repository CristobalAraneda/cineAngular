import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-respnse';

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
 buscarPeliculas( texto: string):Observable<Movie[]>{

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
 const params ={...this.params, page: '1', query: texto};

 return this.http.get<CarteleraResponse>(`${ this.baseUrl}/search/movie`,{ params }).pipe(
    map( resp => resp.results )
  )

 }

 ResetCarteleraPage(){
   this.carteleraPage = 1;
 }

}
