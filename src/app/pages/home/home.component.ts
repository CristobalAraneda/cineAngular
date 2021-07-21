import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-respnse';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesSlideswhow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){

    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + 652;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    
    if( pos > max){
  
      this.peliculaService.getCartelera().subscribe( resp =>{
        this.movies.push(...resp.results);
      })

    }
    //console.log({pos, max});
  }

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {

    this.peliculaService.getCartelera().subscribe( resp =>{
      //console.log(resp.results);
      this.movies = resp.results
      this.moviesSlideswhow = resp.results.slice(5);
    })
  }
}
