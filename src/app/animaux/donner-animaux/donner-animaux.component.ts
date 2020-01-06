import { Component, OnInit } from '@angular/core';
import {AnimauxService} from '../../service/animaux.service';
import {Animaux} from '../animaux';


@Component({
  selector: 'app-donner-animaux',
  templateUrl: './donner-animaux.component.html',
  styleUrls: ['./donner-animaux.component.scss']
})
export class DonnerAnimauxComponent implements OnInit {
  animaux: Animaux;
  listAnimaux: Animaux [];

  constructor(private animauxService: AnimauxService) {
    this.animaux = new Animaux();
  }

  onSubmit() {
  this.animauxService.modify(this.animaux);
  }

  ngOnInit(): void {
    this.animauxService.findFreeAnimaux().subscribe(dataAnimaux => {
      this.listAnimaux = dataAnimaux;
    });
  }
}
