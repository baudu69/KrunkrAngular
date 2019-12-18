import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Visite } from '../metier/visite';
import { Config } from 'protractor';
import {Participer} from '../metier/participer';

@Injectable()
export class VisiteService {
  private headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
  private uneParticipation = new Participer();

  constructor(private http: HttpClient) { }
  public chargerVisites(): Observable<Visite[]> {
    const url = environment.apiURL + '/visite/getAllVisite/' + localStorage.getItem('id') + '/' + localStorage.getItem('jeton');
    return this.http.get<Visite[]>(url).pipe();
  }

    public chargerMesVisites(): Observable<Visite[]> {
        const url = environment.apiURL + '/visite/getAllVisiteUser/' + localStorage.getItem('id') + '/' + localStorage.getItem('jeton');
        return this.http.get<Visite[]>(url).pipe();
    }

  public participer(idVisite: number): Observable<any> {
      const url = environment.apiURL + '/participation/add';
      this.uneParticipation.idVisite = idVisite;
      this.uneParticipation.id = parseInt(localStorage.getItem('id'), 10);
      this.uneParticipation.idJeton = parseInt(localStorage.getItem('id'), 10);
      this.uneParticipation.jeton = localStorage.getItem('jeton');
      return this.http.post(url, JSON.stringify(this.uneParticipation));
  }

    public desinscrire(idVisite: number): Observable<any> {
        const url = environment.apiURL + '/participation/del';
        this.uneParticipation.idVisite = idVisite;
        this.uneParticipation.id = parseInt(localStorage.getItem('id'), 10);
        this.uneParticipation.idJeton = parseInt(localStorage.getItem('id'), 10);
        this.uneParticipation.jeton = localStorage.getItem('jeton');
        return this.http.post(url, JSON.stringify(this.uneParticipation));
    }
}
