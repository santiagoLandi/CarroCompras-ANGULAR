import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { PescaCarritoService } from '../pesca-carrito.service';
import { PescaDataService } from '../pesca-data.service';

@Component({
  selector: 'app-pesca-list',
  templateUrl: './pesca-list.component.html',
  styleUrl: './pesca-list.component.scss'
})
export class PescaListComponent  {
  
  products: product[] =[];
  

  constructor(private carrito: PescaCarritoService, private dataService: PescaDataService){
    
  };

  ngOnInit():void{
    this.dataService.getAll()
    .subscribe(data=>this.products=data);
  };

  addToCarrito(product:product): void{
    this.carrito.addToCarrito(product);
    product.stock-=product.quantity;
    product.quantity=0;
  }
}

  


