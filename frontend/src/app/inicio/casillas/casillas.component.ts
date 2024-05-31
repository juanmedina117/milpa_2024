import { Component, inject } from '@angular/core';
import { MenuVotonIterface } from './interfaces/menu-voto.interface';
import { EnvioCasillasService } from './services/envio-casillas.service';

@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html',
  styleUrl: './casillas.component.css'
})
export class CasillasComponent {

  public _observableEnvioData = inject(EnvioCasillasService);
  
  public menuVotos: MenuVotonIterface[] = [
    
    {
      id:1,
      nombre:'Presidencial',
      ruta:'/sabana',
      type:'F'
    },
    {
      id:2,
      nombre:'Jefatura Gobierno',
      ruta:'/sabana',
      type:'L'
    },
    {
      id:3,
      nombre:'Alcalde',
      ruta:'/sabana',
      type:'L'
    },
    {
      id:4,
      nombre:'Diputado Local',
      ruta:'/sabana',
      type:'L'
    },
    {
      id:5,
      nombre:'Diputado Federal',
      ruta:'/sabana',
      type:'F'
    },
    {
      id:6,
      nombre:'Senador',
      ruta:'/sabana',
      type:'F'
    }
    
  ];

  public seleccionado(data:MenuVotonIterface){

    this._observableEnvioData.envioDato(data);
    
  }
}
