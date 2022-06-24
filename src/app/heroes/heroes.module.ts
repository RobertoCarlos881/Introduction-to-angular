import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule ({
    declarations: [ //aqui van nuestros componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //para exportar nuestros componentes fuera de este modulo o poderlos usar fuera
        ListadoComponent,
        HeroeComponent
    ],
    imports: [ //aqui van todos los modulos
        CommonModule //este modulo sirve para directivas de angular y otras cosas mas
    ]
})
export class HeroesModule {

}