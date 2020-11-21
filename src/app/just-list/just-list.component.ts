import { Component, OnInit } from '@angular/core';
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
    precio : 20,
    stock : 5,
    imagen :"assets/img/prod1.jpeg",
    oferta : false,
  },
  {
    nombre : "Prod2",
    tipo : "xx",
    precio : 20,
    stock : 5,
    imagen :"assets/img/prod1.jpeg",
    oferta : true,
  },
  {
    nombre : "Prod3",
    tipo : "xx",
    precio : 20,
    stock : 0,
    imagen :"assets/img/prod1.jpeg",
    oferta : false,
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
