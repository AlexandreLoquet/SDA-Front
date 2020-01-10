import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeAnimauxComponent } from './animaux/liste-animaux/liste-animaux.component';
import { AjouterAnimauxComponent } from './animaux/ajouter-animaux/ajouter-animaux.component';
import { DonnerAnimauxComponent } from './animaux/donner-animaux/donner-animaux.component';
import {AnimauxService} from './service/animaux.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  _MatMenuDirectivesModule,
  MatButtonModule,
  MatFormFieldModule, MatIcon,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSliderModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SdaService} from './service/sda.service';
import {UsersService} from './service/users.service';






@NgModule({
  declarations: [
    AppComponent,
    ListeAnimauxComponent,
    AjouterAnimauxComponent,
    DonnerAnimauxComponent,
    ToolbarComponent
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
  providers: [AnimauxService, SdaService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
