import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-respnse';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public movies: Movie[] = [];

  public texto: string = '';

  constructor( private activateRoute: ActivatedRoute,
               private peliculasService: PeliculasService) { }


  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {
      this.texto = params.texto;

      this.peliculasService.buscarPeliculas( params.texto ).subscribe( movies => {
        console.log( movies );

        this.movies = movies;
      })
    })
  }

}
