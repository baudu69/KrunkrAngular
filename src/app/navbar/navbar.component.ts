import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lien: string;
  texteLien: string;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('id').toString() === 'null')
    {
      this.lien = 'connexion';
      this.texteLien = 'Connexion';
    }
    else
    {
      this.lien = 'deconnexion';
        this.texteLien = 'Déconnexion';
    }
  }



}
