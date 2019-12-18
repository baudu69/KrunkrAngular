import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Utilisateur } from '../metier/utilisateur';
import {environment} from '../../environments/environment';
import {Visite} from '../metier/visite';

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
        const url = environment.apiURL + '/utilisateur/getAllUtilisateur/' + localStorage.getItem('id') + '/' + localStorage.getItem('jeton');
        return this.http.get<any>(url);
    }

    public delUser(id: number): Observable<any> {
        const url = environment.apiURL + '/utilisateur/del/' + id + '/' + localStorage.getItem('id') + '/' + localStorage.getItem('jeton');
        return this.http.get<any>(url);
    }

    public addUser(email, password, nom, prenom): Observable<any> {
        const url = environment.apiURL + '/signUp';
        this.unUtilisateur.mail = email;
        this.unUtilisateur.mdp = password;
        this.unUtilisateur.nom = nom;
        this.unUtilisateur.prenom = prenom;
        return this.http.post<any>(url, JSON.stringify(this.unUtilisateur));
    }

    public updateUser(id: number, nom: string, prenom: string): Observable<any> {
        const url = environment.apiURL + '/utilisateur/update/' + id;
        this.unUtilisateur.id = id;
        this.unUtilisateur.nom = nom;
        this.unUtilisateur.prenom = prenom;
        this.unUtilisateur.idJeton = parseInt(localStorage.getItem('id'), 10);
        this.unUtilisateur.jeton = localStorage.getItem('jeton');
        return this.http.post<any>(url, JSON.stringify(this.unUtilisateur));
    }

    public getUserById(id: number): Observable<Utilisateur> {
        const url = environment.apiURL + '/utilisateur/getUnUtilisateur/' + id + '/' + localStorage.getItem('id') + '/' + localStorage.getItem('jeton');
        return this.http.get<Utilisateur>(url);
    }
}
