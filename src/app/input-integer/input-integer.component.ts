import { Component, EventEmitter, Input, Output } from '@angular/core';
import {product} from '../pesca-list/product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  
  constructor(){
    
  }
  @Input()
  quantity!: number;

  @Input()
  max!:number;
  
  @Output()
  quantityChange: EventEmitter<number>= new EventEmitter<number>();

  upQuantity(): void{
    if(this.quantity<this.max){
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }
  }
  
  downQuantity(): void{
    if(this.quantity>0){
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeCuantity(event:any):void {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue, ); // Intenta convertir a número

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= this.max) {
      // El valor es un número válido y está dentro del rango de existencias
      this.quantity = parsedValue;
      this.quantityChange.emit(this.quantity);
    } else {
      // Mostrar un mensaje de error o tomar otra acción
      console.log('Valor inválido o fuera de rango');
    }
  }

}
