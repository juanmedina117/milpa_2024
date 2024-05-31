import { Component } from '@angular/core';
import { MenuInicialInterface } from './interfaces/menu-inicial.interface';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrl: './menu-inicio.component.css'
})
export class MenuInicioComponent {

  public menuInicio:MenuInicialInterface [] = [
    {
      nombre:'Casillas',
      ruta:'casilla'
    },
    {
      nombre:'Conteo',
      ruta:'conteo'
    },
    {
      nombre:'Incidencia',
      ruta:'incidencia'
    },
  ]
}
