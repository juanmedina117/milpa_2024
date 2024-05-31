import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsumoPartidosService } from '../../../services/consumo-partidos.service';
import { ConsumoVotosInterface, TotalPartidos } from './interface/consumo-votos.interface';

@Component({
  selector: 'captura-datos',
  templateUrl: './captura-datos.component.html',
  styleUrl: './captura-datos.component.css'
})
export class CapturaDatosComponent implements AfterViewInit{


  private consumoPartidos = inject(ConsumoPartidosService);
  public partidos?:TotalPartidos[];
  
  
  public myForm: FormGroup = this.fb.group({
    nombre:['',Validators.required],
    seccion:['', Validators.required]
  });

  constructor(
    private fb:FormBuilder
  ){
  }



  ngAfterViewInit(): void {
    
    this.consumoPartidos.obtenerPartidos()
        .subscribe(
          {
            next: (resp)=> {
              if(!resp) return;

              this.partidos = resp.totalPartios;

              console.log(this.partidos);
              
              
            },
            error: (error)=> {
              console.log(error);
              
            }
          }
        )
  }



  public guardarDatosPersonales(formValue:any){
    console.log(formValue);
    
  }

}
