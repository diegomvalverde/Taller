/*
Archivo en el cual se definen las rutas del proyecto, además de llamar al módulo principal automaticamente,
se pueden llamar a módulos aparte sin pasar por el inicial
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
