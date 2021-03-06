import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { VisitesComponent } from './visites/visites.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {DeconnexionComponent} from './deconnexion/deconnexion.component';
import { MesVisitesComponent } from './mes-visites/mes-visites.component';

const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'visites', component: VisitesComponent },
  { path: 'accueil', component: NavbarComponent },
  { path: 'inscription', component: InscriptionComponent },
    { path: 'deconnexion', component: DeconnexionComponent },
    { path: 'mesVisites', component: MesVisitesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
