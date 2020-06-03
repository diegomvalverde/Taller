/* 
Archivo en el cual se importan todos los componentes, servicios y dependencias del
proyecto, si se llegase a utilizar alguna dependencia y no se define su importación en este archivo,
se pueden presentar problemas a la hora de compilar el  proyecto.
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
