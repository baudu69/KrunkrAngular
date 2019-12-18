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
    constructor(private visiteService: VisiteService, private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem('id').toString() === 'null') {
            this.router.navigate(['/connexion']);
        }
        this.visiteService.chargerMesVisites().subscribe((data) => {this.lesVisites = data; localStorage.setItem('jeton', this.lesVisites[0].jeton);}, (error) => {this.router.navigate(['/connexion']); });
    }

    desinscrire(id: number): void {
        this.visiteService.desinscrire(id).subscribe((data) => { localStorage.setItem('jeton', data); }, (error) => {});
        alert('Participation enregistré');
        location.reload();

    }

}
