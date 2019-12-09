import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../metier/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  Titre = 'Inscription';
  lblLogin = 'Votre login : ';
  lblMdp = 'Votre mot de passe : ';
  lblMdp2 = 'Confirmer votre mot de passe : ';
  lblNom = 'Votre nom : ';
  lblPrenom = 'Votre prenom : ';
  login: string;
  mdp: string;
  mdp2: string;
  typeAlert: string;
  nom: string;
  prenom: string;
  lblMessage: string;
  estCache = true;


  constructor(private router: Router, private httpClient: HttpClient, private unUserService: UtilisateurService) { }


  inscription(): void {
      if (this.mdp === this.mdp2) {
          this.unUserService.addUser(this.login, this.mdp, this.nom, this.prenom).subscribe(
              data => {
                  this.estCache = false;
                  this.typeAlert = 'alert-success';
                  this.lblMessage = 'Inscription effectué';
                  setTimeout(() => this.router.navigate(['/accueil']), 1000);
              });
      } else {
          this.estCache = false;
          this.lblMessage = 'Le mot de passe n a pas été correctement vérifié';
          this.typeAlert = 'alert-danger';
      }
      }

      ngOnInit() {
  }

}
