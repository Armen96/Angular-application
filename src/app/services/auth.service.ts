import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private store: Store<any>
              ) { }

  private loggedStatus = !!localStorage.getItem('lsLogged') || false;

  get isLogged() {
    return this.loggedStatus;
  }

  setLoggedStatus(value: boolean){
    this.loggedStatus = value;
    localStorage.setItem('lsLogged', String(value));
  }

  logout() {
    localStorage.removeItem('lsLogged');
    this.setLoggedStatus(false);
  }

  getUserDetails(email, password) {
    if ( email && password ) {
      return {
        success: true,
        secret: "This is the secret no one knows but the admin"
      };
    } else {
      return {
        success: false,
        secret: "Invalid"
      };
    }
  }

  getAllState() {
    return this.store.select('appReducer')
  }
}
