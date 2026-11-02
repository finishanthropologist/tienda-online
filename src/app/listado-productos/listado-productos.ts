import { Component } from '@angular/core';
import { Producto } from './producto/producto';

@Component({
  selector: 'app-listado-productos',
  styleUrl: './listado-productos.css',
  templateUrl: './listado-productos.html',
  imports: [Producto],
})
export class ListadoProductos {
  titulo = "Listado de productos";

}
