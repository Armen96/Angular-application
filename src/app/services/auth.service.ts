import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {AppService} from '../shared/services/app.service';
import {environment} from '../../environments/environment';
import {SearchPersonInterface} from '../interfaces/search.person.interface';
import {UsersInterface} from '../interfaces/users.interface';

@Injectable()
export class AuthService extends AppService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  login(email: string, password: string): Observable<any> {
    const url = this.getUrl(environment.USERS.LOGIN, '');
    return this.http.post(url, {email, password});
  }

  register(data): Observable<any> {
    const url = this.getUrl(environment.USERS.REGISTER, '');
    return this.http.post(url, data);
  }

  logout() {
    localStorage.removeItem(environment.AUTH.TOKEN_HEADER_NAME);
    localStorage.removeItem(environment.AUTH.USER);
    return of(true);
  }

  getToken(): string {
    return localStorage.getItem(environment.AUTH.TOKEN_HEADER_NAME) || null;
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getUser(): UsersInterface {
    let user = null;
    if (localStorage.getItem(environment.AUTH.USER)) {
      user = JSON.parse(localStorage.getItem(environment.AUTH.USER));
    }

    return user;
  }

  searchPerson(person: SearchPersonInterface): Observable<any> {
    const url = this.getUrl(environment.USERS.SEARCH, '');
    return this.http.post(url, person);
  }

  emailVerification(email) {
    let message = "";
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const status = re.test(String(email).toLowerCase());

    if (!status) { message = 'Invalid Email Address'; }

    return {
      status: status,
      message: message
    };
  }

  passwordVerification(password) {
    let message = "";
    const status = password.length > 3;

    if (!status) { message = 'Invalid Password'; }

    return {
      status: status,
      message: message
    };
  }

  nameVerification(name) {
    let message = "";
    const status = name.length > 3;

    if (!status) { message = 'Invalid Name'; }

    return {
      status: status,
      message: message
    };
  }

  imageVerification(image) {
    let message = "";
    const status = !!image;

    if (!status) { message = 'Invalid Image File'; }

    return {
      status: status,
      message: message
    };
  }
}
