import { Component, OnInit } from '@angular/core';
import { JustCarroService } from '../just-carro.service';
import { Just } from './Just';

@Component({
  selector: 'app-just-list',
  templateUrl: './just-list.component.html',
  styleUrls: ['./just-list.component.scss']
})
export class JustListComponent implements OnInit {

  productosJust : Just[] = [
    {
    nombre : "Revitalizador Guduchi",
    tipo : "oleo",
    precio : 2000,
    stock : 5,
    imagen :"assets/img/revitalizador-guduchi.jpeg",
    oferta : false,
    cant: 0,
  },
  {
    nombre : "Crema Herbal 31",
    tipo : "Cremas",
    precio : 2500,
    stock : 4,
    imagen :"assets/img/crema-herbal31.jpeg",
    oferta : true,
    cant: 0,
  },
  {
    nombre : "Crema de Lavanda",
    tipo : "Cremas",
    precio : 2300,
    stock : 0,
    imagen :"assets/img/crema-lavanda.jpeg",
    oferta : false,
    cant: 0,
  },
  {
    nombre : "Eucasol",
    tipo : "Spray",
    precio : 1500,
    stock : 3,
    imagen :"assets/img/eucasol.jpeg",
    oferta : false,
    cant: 0,
  },
  {
    nombre : "Espuma de baño",
    tipo : "Spray",
    precio : 1000,
    stock : 4,
    imagen :"assets/img/espuma-banio.jpeg",
    oferta : false,
    cant: 0,
  }

];
  
  constructor(private carro: JustCarroService) {
    
   }

  ngOnInit(): void {
  }

  maximoAlcanzado(mens : string){
    alert(mens);
  }

  addCarro(just: Just):void{
    this.carro.addCarro(just);
    just.stock -= just.cant;
    just.cant = 0;
  }
  

}
