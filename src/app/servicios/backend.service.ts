/*
Los servicios se utilizan para multiples acciones,
las más comunes son para hacer conexiones con servicios
externos y para manejar variables y/o constantes entre modulos 
que no tienen relación directa.

Recuerden que como mencioné, los componentes con relación directa,
 (cuando dentro de un modulo llamo a otro), se pueden enviar paramatros
 que necesitemos dentro del componente hijo.  
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  /* 
  Función que llama a un servicio web por medio de una petición http
  */
  obtenerProductos() 
  {

  }
}
