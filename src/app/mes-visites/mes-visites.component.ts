import { Component, OnInit } from '@angular/core';
import { Visite } from '../metier/visite';
import {VisiteService} from '../service/visite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-visites',
  templateUrl: './mes-visites.component.html',
  styleUrls: ['./mes-visites.component.css']
})
export class MesVisitesComponent implements OnInit {

    lesVisites: Array<Visite>;
    afficher: boolean;
    constructor(private visiteService: VisiteService, private router: Router) { }

    ngOnInit() {
        this.afficher = true;
        if (localStorage.getItem('id').toString() === 'null') {
            this.router.navigate(['/connexion']);
        }
        this.visiteService.chargerMesVisites().subscribe((data) => {this.lesVisites = data; localStorage.setItem('jeton', this.lesVisites[0].jeton); if (this.lesVisites[0].idVisite == null) {
            this.afficher = false;
        }}, (error) => {this.router.navigate(['/connexion']); });


    }

    desinscrire(id: number): void {
        this.visiteService.desinscrire(id).subscribe((data) => { localStorage.setItem('jeton', data); location.reload();}, (error) => {});
        alert('Votre désinscription a été enregistré');

    }

}
