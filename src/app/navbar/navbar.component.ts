import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lien: string;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('id').toString() === 'null')
    {
      this.lien = 'connexion';
    }
    else
    {
      this.lien = 'deconnexion';
    }
  }



}
