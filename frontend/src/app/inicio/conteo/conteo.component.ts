import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-conteo',
  templateUrl: './conteo.component.html',
  styleUrl: './conteo.component.css'
})
export class ConteoComponent {

  public myFormConteo = this.fb.group({
    nombre:['', [Validators.required] ],
    seccion:['', [Validators.required, Validators.maxLength(4),Validators.minLength(4), Validators.min(0)] ],
    total_conteo: ['', [Validators.required,Validators.min(0)]]
  })

  constructor(
    private fb:FormBuilder
  ){

  }

  public guardarData(dataForm:any){
      console.log(dataForm);
      
  }

}
