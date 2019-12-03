import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitesComponent } from './visites/visites.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { HttpConnComponent } from './class/http-conn/http-conn.component';
import { HttpClientModule } from '@angular/common/http';
import {VisiteService} from './service/visite.service';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    VisitesComponent,
    UtilisateursComponent,
    HttpConnComponent,
    DeconnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    VisiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
