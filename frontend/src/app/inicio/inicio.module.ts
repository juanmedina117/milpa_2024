import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { CasillasComponent } from './casillas/casillas.component';
import { ConteoComponent } from './conteo/conteo.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { SabanaModule } from '../sabana/sabana.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuInicioComponent,
    CasillasComponent,
    ConteoComponent,
    IncidenciaComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SabanaModule,
    ReactiveFormsModule
  ]
})
export class InicioModule { }
