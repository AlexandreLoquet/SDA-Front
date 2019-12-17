import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimauxService} from '../../service/animaux.service';
import {Animaux} from '../animaux';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-liste-animaux',
  templateUrl: './liste-animaux.component.html',
  styleUrls: ['./liste-animaux.component.scss']
})


export class ListeAnimauxComponent implements OnInit {

  displayedcolumns = ['id', 'nom', 'types', 'adopte', 'action'];
  dataSource: MatTableDataSource<Animaux>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private animauxService: AnimauxService) { }


  ngOnInit() {
    this.animauxService.findAll().subscribe(data => {
    this.dataSource = new MatTableDataSource<Animaux>(data);
    this.dataSource.paginator = this.paginator;
  });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  SupprimerAnimaux(id: number) {
    this.animauxService.deleteAnimaux(id).subscribe( () => {
      const animauxToDelete = this.dataSource.data.find(animaux => animaux.id === id);
      const index = this.dataSource.data.indexOf(animauxToDelete);
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    });
  }
}
