import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../shared/ngrx/appState';
import * as fromStore from '../../../store/auth';
import {takeUntil} from 'rxjs/operators';
import {UnsubscriptionHandler} from '../../../shared/unsubscription-handler/unsubscription-handler';
import {UsersInterface} from '../../../interfaces/auth/users.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends UnsubscriptionHandler {
  public name = '';
  public usersList: UsersInterface[];

  constructor(private store: Store<AppState>) {
    super();
  }

  onSubmit() {
    if (this.name) {
      this.store.dispatch(new fromStore.Search({name: this.name}));

      this.store.pipe(select(fromStore.getUsersList), takeUntil(this.unsubscribe$)).subscribe(
        state => {
          if (state) {
            this.usersList = state;
          }
        }
      );

      this.name = '';
    }
  }

  openConversation(user) {
    console.log('user', user);
  }
}
