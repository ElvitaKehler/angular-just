import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Just } from './just-list/Just';


@Injectable({
  providedIn: 'root'
})
export class JustCarroService {

  private _listaCarro: Just[] = [];
  listaCarro : BehaviorSubject <Just[]> = new BehaviorSubject(this._listaCarro);

   constructor() { }

   addCarro(just: Just) {

    let item : Just | undefined = this._listaCarro.find((v1) => v1.nombre == just.nombre);
     
    if (!item ){
      if (just.cant != 0)
        this._listaCarro.push({... just});
    } else {
        item.cant+= just.cant;
      
    } 
    this.listaCarro.next(this._listaCarro);
    
    
  }
}
