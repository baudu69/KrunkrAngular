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
    const url = 'http://localhost/baudu/Krunkr3/public/api/visite/getAllVisite';
    return this.http.get<Visite[]>(url).pipe();
  }
}
