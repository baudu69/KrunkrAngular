import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../metier/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  Titre = 'Connexion';
  lblLogin = 'Votre login : ';
  lblMdp = 'Votre mot de passe :';
  login: string;
  mdp: string;
  typeAlert: string;
  lblMessage: string;
  estCache = true;
  private unUtilisateur: Utilisateur;

  constructor(private router: Router, private httpClient: HttpClient, private unUserService: UtilisateurService) { }

  connexion(): void {
  this.unUserService.getLogin(this.login, this.mdp).subscribe (
    data => {
      this.unUtilisateur = data;
      localStorage.setItem('id', this.unUtilisateur.id.toString());
      this.estCache = false;
      this.lblMessage = 'Connexion effectué';
      this.typeAlert = 'alert-success';
      setTimeout( () => this.router.navigate(['/accueil']), 1000 );
    },
    Error => {
      this.estCache = false;
      this.lblMessage = 'Login ou mot de passe incorret';
      this.typeAlert = 'alert-danger';
    });
  }

  ngOnInit() {
  }

}
