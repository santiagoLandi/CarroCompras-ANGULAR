import { Component } from '@angular/core';
import { PescaCarritoService } from '../pesca-carrito.service';
import { product } from '../pesca-list/product';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  listaCarrito$!: Observable<product[]>;

  constructor(private carrito: PescaCarritoService){
    this.listaCarrito$=carrito.listaCarrito.asObservable();
   
  };

}
