import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { CasillasComponent } from './casillas/casillas.component';
import { ConteoComponent } from './conteo/conteo.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';

const routes: Routes = [
  {
    path:'',
    component: MenuInicioComponent
  },
  {
    path:'casilla',
    component: CasillasComponent,
  },
  {
    path:'conteo',
    component: ConteoComponent
  },
  {
    path:'incidencia',
  component: IncidenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
