import { Component, OnInit } from '@angular/core';
import {AnimauxService} from '../../service/animaux.service';
import {Animaux} from '../animaux';
import {Users} from '../../users/users';
import {UsersService} from '../../service/users.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-donner-animaux',
  templateUrl: './donner-animaux.component.html',
  styleUrls: ['./donner-animaux.component.scss']
})
export class DonnerAnimauxComponent implements OnInit {
  animaux: Animaux;
  listAnimaux: Animaux [];
  listUsers: Users [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private animauxService: AnimauxService,
              private usersService: UsersService) {
    this.animaux = new Animaux();
  }

  onSubmit() {
    this.animauxService.adopt(this.animaux.id, this.animaux).subscribe(result => this.gotoAnimauxList());
  }

  gotoAnimauxList() {
    this.router.navigate(['/animaux']);
  }

  ngOnInit(): void {
    this.animauxService.findFreeAnimaux().subscribe(dataAnimaux => {
      this.listAnimaux = dataAnimaux;
    });
    this.usersService.findAll().subscribe( dataUsers => {
      this.listUsers = dataUsers;
    });
  }
}
