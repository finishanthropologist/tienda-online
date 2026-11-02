import { Component } from '@angular/core';
import { Producto } from './producto/producto';

@Component({
  imports: [Producto],
  selector: 'app-listado-productos',
  styleUrl: './listado-productos.css',
  templateUrl: './listado-productos.html',
})
export class ListadoProductos {
  titulo = "Listado de productos";

  // Variable para guardar el producto único
  miProducto: any = null;

  recibirProducto(productoRecibido: any) {
    this.miProducto = productoRecibido; // Guarda el objeto directo
  }
}
