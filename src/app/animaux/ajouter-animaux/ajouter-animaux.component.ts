import {Component, OnInit} from '@angular/core';
import {Animaux} from '../animaux';
import {AnimauxService} from '../../service/animaux.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SdaService} from '../../service/sda.service';
import {Sda} from '../../sda/sda';

@Component({
  selector: 'app-ajouter-animaux',
  templateUrl: './ajouter-animaux.component.html',
  styleUrls: ['./ajouter-animaux.component.scss']
})
export class AjouterAnimauxComponent implements OnInit {

  ani: Animaux;
  listSda: Sda[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private animauxService: AnimauxService,
              private sdaService: SdaService) {
    this.ani = new Animaux();
  }

  onSubmit() {
    this.animauxService.save(this.ani).subscribe(result => this.gotoAnimauxList());
  }

  gotoAnimauxList() {
    this.router.navigate(['/animaux']);
  }

  ngOnInit(): void {
    this.sdaService.findAll().subscribe(dataSDA => {
      this.listSda = dataSDA;
    });
  }
}


