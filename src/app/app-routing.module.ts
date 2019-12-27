import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeAnimauxComponent} from './animaux/liste-animaux/liste-animaux.component';
import {AjouterAnimauxComponent} from './animaux/ajouter-animaux/ajouter-animaux.component';
import {DonnerAnimauxComponent} from './animaux/donner-animaux/donner-animaux.component';

const routes: Routes = [
  { path: '', component: ListeAnimauxComponent},
  { path:  'animaux' , component: ListeAnimauxComponent},
  { path: 'recueillir', component: AjouterAnimauxComponent},
  { path: 'adoption', component: DonnerAnimauxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


