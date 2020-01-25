import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {AuthService} from '../../services';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private inj: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.inj.get(AuthService).getToken();
    const header = {};
    header[environment.AUTH.TOKEN_HEADER_NAME] = token;
    header['authorization'] = token;
    if (token) {
      req = req.clone({ setHeaders: header });
    }
    return next
      .handle(req)
      .pipe(tap((ev: HttpEvent<any>) => {
      }))
      .pipe(catchError((response, caught) => {
        if (response instanceof HttpErrorResponse) {
          if (response.error.message) {
            if (response.error.errorNumber === 'E050000001') {
              console.log('Session expired, redirecting to login page');
              const router = this.inj.get(Router);
              router.navigateByUrl('/login');
            } else {
              alert('error');
            }
          }
        }
        return throwError(response);
      }));
  }

}
