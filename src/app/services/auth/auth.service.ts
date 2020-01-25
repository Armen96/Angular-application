import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {UsersInterface} from '../../interfaces/auth/users.interface';
import {AppService} from '../../shared/services/app.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthService extends AppService {
  private user: UsersInterface;

  constructor(protected http: HttpClient) {
    super(http);
  }

  login(email: string, password: string): Observable<any> {
    const url = this.getUrl(environment.USERS.LOGIN, '');
    return this.http.post(url, {email, password});
  }

  register(name: string, email: string, password: string): Observable<any> {
    const url = this.getUrl(environment.USERS.REGISTER, '');
    return this.http.post(url, {name, email, password});
  }

  logout() {
    localStorage.removeItem(environment.AUTH.TOKEN_HEADER_NAME);
    localStorage.removeItem(environment.AUTH.USER);
    this.user = null;
    return of(true);
  }

  getToken(): string {
    return localStorage.getItem(environment.AUTH.TOKEN_HEADER_NAME) || null;
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getUser(): string {
    let user = null;
    if (localStorage.getItem(environment.AUTH.USER)) {
      user = JSON.parse(localStorage.getItem(environment.AUTH.USER));
    }

    return user;
  }
}
