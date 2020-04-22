import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {AuthService} from '../../services';
import {environment} from '../../../environments/environment';
import {UiToastService} from '../../shared/ui-toast/ui-toast.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private inj: Injector, protected uiToastService: UiToastService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.inj.get(AuthService).getToken();
    const header = {};

    if (token && !token.includes("Bearer")) {
      token = 'Bearer ' + token;
    }

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
          if (response.status > 300 || response.error) {
            console.log('Session expired, redirecting to login page');
            this.inj.get(AuthService).logout();
            const router = this.inj.get(Router);
            router.navigateByUrl('/login');
            this.uiToastService.showMessage(response.error.message || 'Something went wrong');
          }
        }
        return throwError(response);
      }));
  }
}
