import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  azerty : any;
  estCache = true;
  constructor(private router: Router, private httpClient: HttpClient) { }

  valider(): void {
    if(this.login !== 'b2sio2' || this.mdp !== 'slam4') {
      this.lblMessage = 'erreur';
      this.estCache = false;
    } else {
      this.estCache = true;
      this.router.navigate(['/accueil']);
    }
  }
  connexion(): void {
    this.azerty = this.httpClient.get('http://localhost/gailleton/krunkr/public/api/signIn');
    console.log(this.azerty);
    this.estCache = false;
  }

  ngOnInit() {
  }

}
