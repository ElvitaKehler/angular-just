import { Injectable } from '@angular/core';
import { Just } from './just-list/Just';


@Injectable({
  providedIn: 'root'
})
export class JustCarroService {

  listaCarro : Just[] = [];

   constructor() { }

   addCarro(just: Just) {

    let item : Just = this.listaCarro.find((v1) => v1.nombre == just.nombre);
     
    if (!this.listaCarro.find((v1) => v1.nombre == just.nombre)){
        this.listaCarro.push({... just});
    } else {

      
    } 
    console.log(this.listaCarro);
    
    
  }
}
