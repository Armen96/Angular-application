import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../shared/ngrx/appState';
import * as fromStore from '../../../store/auth';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();

  error: HttpErrorResponse;
  loader: boolean;

  constructor(
    private store: Store<AppState>,
    protected router: Router
  ) {}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  login(email: string, password: string) {
    this.error = null;
    this.store.dispatch(new fromStore.Login({email, password}));

    this.store.pipe(select(fromStore.getUser), takeUntil(this.unsubscribe$)).subscribe(
      state => {
        if (state) {
          this.router.navigate(['/profile']);
        }
      }
    );
  }
}
