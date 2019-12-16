import { Component, OnInit } from '@angular/core';
import {Animaux} from '../animaux';
import {AnimauxService} from '../../service/animaux.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-animaux',
  templateUrl: './ajouter-animaux.component.html',
  styleUrls: ['./ajouter-animaux.component.scss']
})
export class AjouterAnimauxComponent {

  ani: Animaux;

  constructor(private route: ActivatedRoute, private router: Router, private animauxService: AnimauxService) {
    this.ani = new Animaux();
  }

  onSubmit() {
    this.animauxService.save(this.ani).subscribe(result => this.gotoAnimauxList());
  }

  gotoAnimauxList() {
    this.router.navigate(['/animaux']);
  }
}


