import { Injectable } from '@angular/core';
import { product } from './pesca-list/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PescaCarritoService {

  private _listaCarrito: product[]=[];
  listaCarrito: BehaviorSubject <product[]>= new BehaviorSubject<product[]>([]);

  constructor() { }


  addToCarrito(product: product) {
    let item: product | null = this._listaCarrito.find((v1) => v1.producttype == product.producttype) || null;
    if (!item) {
        this._listaCarrito.push({...product});
    }else{
      item.quantity += product.quantity;
    }
    console.log(this._listaCarrito);
    this.listaCarrito.next(this._listaCarrito);
}

}
