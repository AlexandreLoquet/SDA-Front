import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsListComponent } from './animals/animalsList/animals-list.component';
import { AddAnimalsComponent } from './animals/addAnimal/add-animals.component';
import { GiveAnimalComponent } from './animals/giveAnimal/give-animal.component';
import {ModifyAnimalComponent} from './animals/modifyAnimal/modify-animal.component';
import {AnimalsService} from './services/animals.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  _MatMenuDirectivesModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSliderModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SdaService} from './services/sda.service';
import {UsersService} from './services/users.service';



@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    AddAnimalsComponent,
    GiveAnimalComponent,
    ToolbarComponent,
    ModifyAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [AnimalsService, SdaService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
