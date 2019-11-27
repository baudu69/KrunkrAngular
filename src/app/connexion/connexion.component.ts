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

  Titre: string = 'Connexion';
  lblLogin: string = 'Votre login : ';
  lblMdp: string = 'Votre mot de passe :';
  login: string;
  mdp: string;
  lblMessage: string;
  estCache = true;
  private unUtilisateur: Utilisateur;
  constructor(private router: Router, private httpClient: HttpClient, private unUserService: UtilisateurService) { }

  valider(): void {
   if (this.login !== 'b2sio2' || this.mdp !== 'slam4') {
      this.lblMessage = 'erreur';
      this.estCache = false;
    } else {
      this.estCache = true;
      this.router.navigate(['/accueil']);
    }
  }

  connexion(): void {
  this.unUserService.getLogin(this.login, this.mdp).subscribe (
    data => {
      this.unUtilisateur = data;
      alert('Authentifié');
      this.router.navigate(['/accueil']);
    },
    Error => {
      alert(Error.messages);
    });
  }

  ngOnInit() {
  }

}
