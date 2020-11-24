import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JustCarroService } from '../just-carro.service';
import { Just } from '../just-list/Just';

@Component({
  selector: 'app-just-carr',
  templateUrl: './just-carr.component.html',
  styleUrls: ['./just-carr.component.scss']
})
export class JustCarrComponent implements OnInit {

  listaCarro$! : Observable <Just[]>;
  
  constructor(private carro: JustCarroService) { 
    this.listaCarro$ = carro.listaCarro.asObservable();
  }

  ngOnInit(): void {
  }

}
