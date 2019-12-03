import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Visite } from '../metier/visite';
import { Config } from 'protractor';

@Injectable()
export class VisiteService {
  private headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

  constructor(private http: HttpClient) { }
  public chargerVisites(): Observable<Visite[]> {
    const url = environment.apiURL + '/visite/getAllVisite';
    return this.http.get<Visite[]>(url).pipe();
  }
}
