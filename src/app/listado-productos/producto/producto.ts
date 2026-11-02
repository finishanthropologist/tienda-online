import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [/*RouterOutlet*/],
  selector: 'app-producto',
  styleUrl: './producto.css',
  templateUrl: './producto.html',
})
export class Producto {
  // 1. Creamos el emisor de eventos para enviar el producto
  @Output() enviarProducto = new EventEmitter<any>();

  producto = {
    descripcion: "Un excelente y nuevo gran producto",
    nombre: "Computador HP",
    precio: "$100"
  }

  // 2. Método para disparar el envío
  mandarAlPadre() {
    this.enviarProducto.emit(this.producto);
  }
}
