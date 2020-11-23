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
    nombre : "Prod1",
    tipo : "xx",
    precio : 200,
    stock : 5,
    imagen :"assets/img/prod1.jpeg",
    oferta : false,
    cant: 0,
  },
  {
    nombre : "Crema Herbal 31",
    tipo : "Cremas",
    precio : 20,
    stock : 5,
    imagen :"assets/img/crema-herbal31.jpeg",
    oferta : true,
    cant: 0,
  },
  {
    nombre : "Crema de Lavanda",
    tipo : "Cremas",
    precio : 20,
    stock : 0,
    imagen :"assets/img/crema-lavanda.jpeg",
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
  }
  

}
