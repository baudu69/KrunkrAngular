import { Component, OnInit } from '@angular/core';
import { Utilisateur} from '../metier/utilisateur';
import { UtilisateurService} from '../service/utilisateur.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  lesUtilisateurs: Array<Utilisateur>;
  constructor(private userService: UtilisateurService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => {this.lesUtilisateurs = data; }, (error) => {});
  }

}
