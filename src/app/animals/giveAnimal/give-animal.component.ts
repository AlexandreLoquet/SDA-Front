import { Component, OnInit } from '@angular/core';
import {AnimalsService} from '../../services/animals.service';
import {Animals} from '../animals';
import {Users} from '../../users/users';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-give-animal',
  templateUrl: './give-animal.component.html',
  styleUrls: ['./give-animal.component.scss']
})
export class GiveAnimalComponent implements OnInit {
  animals: Animals;
  animalsList: Animals [];
  usersList: Users [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private animauxService: AnimalsService,
              private usersService: UsersService) {
    this.animals = new Animals();
  }

  onSubmit() {
    this.animauxService.adopt(this.animals.id, this.animals).subscribe(result => this.gotoAnimalsList());
  }

  gotoAnimalsList() {
    this.router.navigate(['/animals']);
  }

  ngOnInit(): void {
    this.animauxService.findFreeAnimaux().subscribe(dataAnimals => {
      this.animalsList = dataAnimals;
    });
    this.usersService.findAll().subscribe( dataUsers => {
      this.usersList = dataUsers;
    });
  }
}
