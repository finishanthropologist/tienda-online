import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [/*RouterOutlet*/],
  selector: 'app-producto',
  styleUrl: './producto.css',
  templateUrl: './producto.html',
})
export class Producto {

  producto = {
    descripcion: "Un excelente y nuevo gran producto",
    nombre: "Computador HP",
    precio: "$100"
  }
}
