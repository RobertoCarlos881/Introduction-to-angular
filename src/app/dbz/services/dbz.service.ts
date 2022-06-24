import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
    constructor(){}

    private _personaje: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        },
        {
          nombre: 'Krillin',
          poder: 5000
        }
    ];

    get personajes() {
        return [...this._personaje];
    }

    agregarPersonaje(personaje: Personaje){
      this._personaje.push(personaje);
    }
}