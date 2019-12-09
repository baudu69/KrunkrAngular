import { Component, OnInit } from '@angular/core';
import {VisiteService} from '../service/visite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lien: string;
  texteLien: string;
  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id').toString() === 'null') {
        this.lien = 'connexion';
        this.texteLien = 'Connexion';
    } else {
        this.lien = 'deconnexion';
        this.texteLien = 'Déconnexion';
    }

    if (localStorage.getItem('id').toString() === 'null') {
      this.router.navigate(['/connexion']);
    }
  }



}
