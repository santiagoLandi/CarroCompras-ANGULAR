import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-pesca-list',
  templateUrl: './pesca-list.component.html',
  styleUrl: './pesca-list.component.scss'
})
export class PescaListComponent  {
  
  products: product[] =[
    {
      producttype: "CAÑA TELESCOPICA",
      trademark:"FLOUNDER LIMAY ",
      price: 96709,
     stock:15,
     image: "assets/img/founder.jpeg",
     onsale: false,
     quantity:0,
    },
    {
      producttype: "CAÑA PEJERREY",
      trademark:"OKUMA",
      price: 220000,
      stock:0,
      image: "assets/img/okumapeje.jpeg",
      onsale: false,
      quantity:0,
     },
     {
      producttype: "CAÑA P/EMBARCAR",
      trademark:"SHIMANO",
      price: 145900,
      stock:1,
      image: "assets/img/shimanocania.jpeg",
      onsale: true,
      quantity:0,
    },
     {
      producttype: "REEL 8R SPINNING DRAG",
      trademark:"SHIMANO",
      price: 600709,
      stock:2,
      image: "assets/img/reelshimano.jpeg",
      onsale: false,
      quantity:0,
     },
     {
      producttype: "REEL 6R MAGNETICO",
      trademark:"OKUMA",
      price: 216500,
      stock:0,
      image: "assets/img/reelokuma.jpeg",
      onsale: false,
      quantity:0,
     },
     {
      producttype: "REEL 7R ROTATIVO",
      trademark:"OKUMA",
      price: 456709,
      stock:2,
      image: "assets/img/okumarotativo.jpeg",
      onsale: false,
      quantity:0,
    }
  ]

  constructor(){};

  upQuantity(product:product): void{
    if(product.quantity<product.stock)
      product.quantity ++;
  }
  
  downQuantity(product:product): void{
    if(product.quantity>0)
      product.quantity --;
  }
  changeCuantity(event:any,product:product):void {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue, ); // Intenta convertir a número

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= product.stock) {
      // El valor es un número válido y está dentro del rango de existencias
      product.quantity = parsedValue;
    } else {
      // Mostrar un mensaje de error o tomar otra acción
      console.log('Valor inválido o fuera de rango');
    }
  }
}

  


