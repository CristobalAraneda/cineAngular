import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-respnse';

@Component({
  selector: 'app-peliculas-poster-grip',
  templateUrl: './peliculas-poster-grip.component.html',
  styleUrls: ['./peliculas-poster-grip.component.css']
})
export class PeliculasPosterGripComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {

    console.log(this.movies);

  }

}
