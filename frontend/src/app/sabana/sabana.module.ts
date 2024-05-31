import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabanaRoutingModule } from './sabana-routing.module';
import { VistaSabanaComponent } from './vista-sabana/vista-sabana.component';
import { CapturaDatosComponent } from './components/captura-datos/captura-datos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VistaSabanaComponent,
    CapturaDatosComponent
  ],
  imports: [
    CommonModule,
    SabanaRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  exports:[
    CapturaDatosComponent
  ]
})
export class SabanaModule { }
