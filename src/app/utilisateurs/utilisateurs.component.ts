import { Component, OnInit } from '@angular/core';
import { Utilisateur} from '../metier/utilisateur';
import { UtilisateurService} from '../service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  lesUtilisateurs: Array<Utilisateur>;
  constructor(private userService: UtilisateurService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id').toString() === 'null')
    {
      this.router.navigate(['/connexion']);
    }
    this.userService.getAllUsers().subscribe((data) => {this.lesUtilisateurs = data; }, (error) => {});
  }

}
