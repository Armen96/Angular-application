import { Component } from '@angular/core';
import * as fromStore from '../../../store';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../ngrx/appState';
import {AuthService} from '../../../services';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {UnsubscriptionHandler} from '../../unsubscription-handler/unsubscription-handler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends UnsubscriptionHandler {

  public isLogged = false;
  public user = null;

  constructor(
    protected store: Store<AppState>,
    protected authService: AuthService,
    protected router: Router
  ) {
    super();
    this.store.dispatch(new fromStore.LoadRecords());

    this.isLogged = authService.isLoggedIn();
    this.user = authService.getUser();

    this.store.pipe(select(fromStore.getUser), takeUntil(this.unsubscribe$)).subscribe(
      state => {
        if (state) {
          this.user = state;
          this.isLogged = true;
        }
      }
    );

  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.isLogged = false;

    this.router.navigate(['/']);
  }
}
