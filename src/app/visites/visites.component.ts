import { Component, OnInit } from '@angular/core';
import { Visite } from '../metier/visite';
import {VisiteService} from '../service/visite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.css']
})
export class VisitesComponent implements OnInit {
  lesVisites: Array<Visite>;
  constructor(private visiteService: VisiteService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id').toString() === 'null') {
      this.router.navigate(['/connexion']);
    }
    this.visiteService.chargerVisites().subscribe((data) => {this.lesVisites = data; localStorage.setItem('jeton', this.lesVisites[0].jeton); }, (error) => {this.router.navigate(['/connexion']); });
  }

  participer(id: number): void {
      this.visiteService.participer(id).subscribe((data) => { localStorage.setItem('jeton', data); }, (error) => {});
      alert('Votre participation a été enregistré');
      location.reload();
  }

}
