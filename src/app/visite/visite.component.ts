import { Component, OnInit } from '@angular/core';
import { Visite } from '../metier/visite';
import {VisiteService} from '../service/visite.service';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {

  visite: Visite;
  lesVisites: Array<Visite>;
  constructor(private visiteService: VisiteService) { }

  ngOnInit() {
    this.visiteService.chargerVisites().subscribe((data) => {this.lesVisites = data; }, (error) => {});
  }

  charger(): void {
    this.visiteService.chargerVisites().subscribe((data) => {this.lesVisites = data; }, (error) => {});
  }

}
