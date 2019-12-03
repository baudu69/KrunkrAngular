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

  connexion(): void {
  this.unUserService.getLogin(this.login, this.mdp).subscribe (
    data => {
      this.unUtilisateur = data;
      alert('Authentifié');
      localStorage.setItem('id', this.unUtilisateur.id.toString());
      alert(localStorage.getItem('id'));
      this.router.navigate(['/accueil']);
    },
    Error => {
      alert(Error.messages);
    });
  }

  ngOnInit() {
  }

}
