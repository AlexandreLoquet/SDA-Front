import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalsListComponent} from './animals/animalsList/animals-list.component';
import {AddAnimalsComponent} from './animals/addAnimal/add-animals.component';
import {GiveAnimalComponent} from './animals/giveAnimal/give-animal.component';
import {ModifyAnimalComponent} from './animals/modifyAnimal/modify-animal.component';

const routes: Routes = [
  { path: '', component: AnimalsListComponent},
  { path: 'animals' , component: AnimalsListComponent},
  { path: 'host', component: AddAnimalsComponent},
  { path: 'adoption', component: GiveAnimalComponent},
  { path: 'modify', component: ModifyAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


