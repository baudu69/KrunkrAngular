import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Utilisateur } from '../metier/utilisateur';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private unUtilisateur = new Utilisateur();

  constructor(private http: HttpClient) { }
  public getUserByLogin(email, password): Observable<Utilisateur> {
    // Version CRUD
    const url = environment.apiURL + 'read.php?login="${email}"&mdp="{password"}';
    return this.http.get<Utilisateur>(url).pipe();
  }

  public getLogin(email, password): Observable<any> {
    const url = environment.apiURL + '/signIn';
    this.unUtilisateur.mail = email;
    this.unUtilisateur.mdp = password;
    return this.http.post<any>(url, JSON.stringify(this.unUtilisateur));
  }

  public getAllUsers(): Observable<any> {
    const url = environment.apiURL + '/utilisateur/getAllUtilisateur';
    return this.http.get<any>(url);
  }


}
