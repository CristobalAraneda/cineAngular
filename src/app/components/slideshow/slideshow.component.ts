import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-respnse';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styles: [
  ]
})
export class SlideshowComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {

    console.log(this.movies);
  }

}
