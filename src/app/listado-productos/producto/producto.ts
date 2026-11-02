import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [/*RouterOutlet*/],
  selector: 'app-producto',
  styleUrl: './producto.css',
  templateUrl: './producto.html',
})
export class Producto {

  producto1 = {
    descripcion: "Un excelente y nuevo gran producto",
    nombre: "Computador HP",
    precio: "$100"
  }

  producto2 = {
    descripcion: "El mejor producto del mundo",
    nombre: "Jabon de tocador",
    precio: "$32"
  }

  producto3 = {
    descripcion: "El más económico de todos",
    nombre: "Agua mineral",
    precio: "$10"
  }
  }

