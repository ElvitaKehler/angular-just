import { Component, OnInit } from '@angular/core';
import { JustCarroService } from '../just-carro.service';

@Component({
  selector: 'app-just-carr',
  templateUrl: './just-carr.component.html',
  styleUrls: ['./just-carr.component.scss']
})
export class JustCarrComponent implements OnInit {

  constructor(private carro: JustCarroService) { }

  ngOnInit(): void {
  }

}
