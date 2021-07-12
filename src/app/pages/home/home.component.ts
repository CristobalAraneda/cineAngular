import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-respnse';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {

    this.peliculaService.getCartelera().subscribe( resp =>{
      //console.log(resp.results);
      this.movies = resp.results;
    })
  }

}
