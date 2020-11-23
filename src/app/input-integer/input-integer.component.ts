import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Just } from '../just-list/Just';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input() cantidad!: number;
  @Input() max!: number;

  @Output() cantidadChange : EventEmitter<number> = new EventEmitter<number>();
  @Output() maxAlcanzado : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addCant(): void{
    if (this.max>this.cantidad){
        this.cantidad++;
        this.cantidadChange.emit(this.cantidad);
    } else
      this.maxAlcanzado.emit("Se alcanzó el máximo");
        
  }
  rmCant(): void{
    if (this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
      
    }
      
  }

  cambioCantidad(event: any): void{
    console.log(event);
    this.cantidadChange.emit(this.cantidad);
  }
}
