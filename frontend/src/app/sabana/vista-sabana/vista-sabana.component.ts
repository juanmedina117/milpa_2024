import { AfterViewInit, Component, OnDestroy, inject } from '@angular/core';
import { EnvioCasillasService } from '../../inicio/casillas/services/envio-casillas.service';

@Component({
  selector: 'app-vista-sabana',
  templateUrl: './vista-sabana.component.html',
  styleUrl: './vista-sabana.component.css'
})
export class VistaSabanaComponent implements AfterViewInit,OnDestroy{

  private _dataCasilla = inject(EnvioCasillasService);

  ngAfterViewInit(): void {
    this._dataCasilla.escucharData()
        .subscribe(
          {
            next:(resp)=> {
              console.log(resp);
              
            },
            error: (error)=> {
              throw 'No se pudo obtener el dato.';
            }
          }
        )
  }

  ngOnDestroy(): void {
    this._dataCasilla.escucharData().subscribe();
    console.log("DESTROY");
    
  }

  

  

}
