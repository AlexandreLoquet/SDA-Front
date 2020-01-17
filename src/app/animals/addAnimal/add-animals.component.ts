import {Component, OnInit} from '@angular/core';
import {Animals} from '../animals';
import {AnimalsService} from '../../services/animals.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SdaService} from '../../services/sda.service';
import {Sda} from '../../sda/sda';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.scss']
})
export class AddAnimalsComponent implements OnInit {

  animals: Animals;
  sdaList: Sda[];
  typesList: string[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private animalService: AnimalsService,
              private sdaService: SdaService) {
    this.animals = new Animals();
  }

  onSubmit() {
    this.animalService.save(this.animals).subscribe(result => this.gotoAnimalsList());
  }

  gotoAnimalsList() {
    this.router.navigate(['/animals']);
  }

  ngOnInit(): void {
    this.sdaService.findAll().subscribe(dataSDA => {
      this.sdaList = dataSDA;
    });
    this.animalService.findTypesOfAnimals().subscribe(dataTypes => {
      this.typesList = dataTypes;
    });
  }
}


