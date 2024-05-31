import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaSabanaComponent } from './vista-sabana/vista-sabana.component';

const routes: Routes = [
  {
    path:'',
    component:VistaSabanaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabanaRoutingModule { }
