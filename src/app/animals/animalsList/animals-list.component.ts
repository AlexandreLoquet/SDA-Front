import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimalsService} from '../../services/animals.service';
import {Animals} from '../animals';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Users} from '../../users/users';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})


export class AnimalsListComponent implements OnInit {

  displayedcolumns = ['id', 'nom', 'types', 'sda', 'adopte', 'action'];
  dataSource: MatTableDataSource<Animals>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private animauxService: AnimalsService,
              private  userService: UsersService) {}


  ngOnInit() {
    this.animauxService.findAll().subscribe(dataAnimals => {
      this.dataSource = new MatTableDataSource<Animals>(dataAnimals);
      this.dataSource.paginator = this.paginator;
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deleteAnimals(id: number) {
    if (confirm('Etes vous sûr de vouloir supprimer cet animal ? ')) {
      this.animauxService.deleteAnimaux(id).subscribe(() => {
        const animalToDelete = this.dataSource.data.find(animals => animals.id === id);
        const index = this.dataSource.data.indexOf(animalToDelete);
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
      });
    }
  }



  displayNameOfCarer(user: Users) {
    const {lastname, firstname} = user;
    return `${firstname} ${lastname}`;
  }

  openUserDetails(user: Users) {
    if (user) {
      return ` Adoptant : ${this.displayNameOfCarer(user)}`;
    }
    }

}

