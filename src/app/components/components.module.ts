import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGripComponent } from './peliculas-poster-grip/peliculas-poster-grip.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    NavbarComponent, 
    SlideshowComponent, 
    PeliculasPosterGripComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGripComponent
  ]
    

})
export class ComponentsModule { }
