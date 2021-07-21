import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGripComponent } from './peliculas-poster-grip/peliculas-poster-grip.component';


@NgModule({
  declarations: [
    NavbarComponent, 
    SlideshowComponent, 
    PeliculasPosterGripComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGripComponent
  ]
    

})
export class ComponentsModule { }
