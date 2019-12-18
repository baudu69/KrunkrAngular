import { Component, OnInit } from '@angular/core';
import { Utilisateur} from '../metier/utilisateur';
import { UtilisateurService} from '../service/utilisateur.service';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  lesUtilisateurs: Array<Utilisateur>;
  isModif: boolean;
  id: number;
  nom: string;
  prenom: string;
  unUtilisateur: Utilisateur;
  constructor(private userService: UtilisateurService, private router: Router, private http: HttpClient, private unUserService: UtilisateurService) { }

  ngOnInit() {
    if (localStorage.getItem('id').toString() === 'null') {
      this.router.navigate(['/connexion']);
    }
    this.isModif = false;
    this.userService.getAllUsers().subscribe((data) => {this.lesUtilisateurs = data; localStorage.setItem('jeton', this.lesUtilisateurs[0].jeton); }, (error) => {this.router.navigate(['/connexion']);});
  }

  modifier(id: number): void {
      this.isModif = true;
      this.unUtilisateur = new Utilisateur();
      this.userService.getUserById(id).subscribe((data) => { this.nom = data.nom; this.prenom = data.prenom; localStorage.setItem('jeton', data.jeton); }, (error) => { });
      this.id = id;
    }

    supprimer(id: number): void {
        this.userService.delUser(id).subscribe((data) => { localStorage.setItem('jeton', data); }, (error) => {});
        location.reload();
    }

    validModifier(): void {
      this.unUserService.updateUser(this.id, this.nom, this.prenom).subscribe((data) => { localStorage.setItem('jeton', data); }, (error) => {alert(error); });
      location.reload();
    }
}
