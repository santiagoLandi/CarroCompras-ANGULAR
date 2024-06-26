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
     producttype: "CAÑA TELESCOPICA 360 MT",
     trademark:"FLOUNDER LIMAY ",
     price: 96709,
     stock:15,
     image: "assets/img/founder.jpeg",
     onsale: false,
    },
    {
      producttype: "CAÑA PEJERREY",
      trademark:"OKUMA",
      price: 220000,
      stock:0,
      image: "assets/img/okumapeje.jpeg",
      onsale: false,
     },
     {
      producttype: "CAÑA PARA EMBARCAR",
      trademark:"SHIMANO",
      price: 145900,
      stock:1,
      image: "assets/img/shimanocania.jpeg",
      onsale: true,
     },
     {
      producttype: "REEL 8 RULEMANES SPINNING DRAG",
      trademark:"SHIMANO",
      price: 600709,
      stock:2,
      image: "assets/img/reelshimano.jpeg",
      onsale: false,
     },
     {
      producttype: "REEL 6 RULEMANES MAGNETICO",
      trademark:"OKUMA",
      price: 216500,
      stock:0,
      image: "assets/img/reelokuma.jpeg",
      onsale: false,
     },
     {
      producttype: "REEL 7 RULEMANES ROTATIVO",
      trademark:"OKUMA",
      price: 456709,
      stock:2,
      image: "assets/img/okumarotativo.jpeg",
      onsale: false,
     }
  ]

  constructor(){};

}
