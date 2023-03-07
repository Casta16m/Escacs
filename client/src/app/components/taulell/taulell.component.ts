import { Component } from '@angular/core';
import { taulell } from 'src/app/models/Entitats/Implementacions/taulell/tualell';

@Component({
  selector: 'app-taulell',
  templateUrl: './taulell.component.html',
  styleUrls: ['./taulell.component.scss']
})
export class TaulellComponent {

  taulell: taulell;

  constructor() {
    this.taulell = new taulell([], [], [], 1);
    this.taulell.crearTaulell();
    this.taulell.emplenarTaulell();

  }
}