import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };
  
  //get personaje(): Personaje[] {
  //  return this.dbzService.personaje;
  //}

  //agregarNuevoPersonaje(arg: Personaje) {
  //  this.personaje.push(arg);
  //}

  constructor(/*private dbzService: DbzService*/) {}
}
