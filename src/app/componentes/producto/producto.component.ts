/* 
Este es el archivo TypeScript del componente llamado producto,
en el prodremos definir funciones, variables, constantes, etc.
Además, podremos definir entradas y salidas de otros componentes.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto', // Nombre con el que llamamos al componente
  templateUrl: './producto.component.html', // El HTML del componente
  styleUrls: ['./producto.component.css'] // El archivo de stilos del componente que se aplica al HTML
})
export class ProductoComponent implements OnInit {

  /*
  Este constructor lo agrega por defecto Angular, se inicia de primiero al iniciar un módulo
  */
  constructor() { }

  /*
  De igual forma, esta función se agrega por defecto y es ejecutada automaticamente cuando el
  componente esta listo, pero justo depes del constructor.
  */
  ngOnInit(): void {

  }

}
