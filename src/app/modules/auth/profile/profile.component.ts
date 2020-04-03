import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../shared/ngrx/appState';
import * as fromStore from '../../../store/auth';
import {takeUntil} from 'rxjs/operators';
import {UnsubscriptionHandler} from '../../../shared/unsubscription-handler/unsubscription-handler';
import {UsersInterface} from '../../../interfaces/users.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent extends UnsubscriptionHandler {
  public usersList: UsersInterface[];
  public selectedUser: UsersInterface;
  public roomId = '';
  public conversationStatus = false;

  constructor(private store: Store<AppState>) {
    super();
  }

  onSubmit(name) {
    if (name) {
      this.store.dispatch(new fromStore.Search({name: name}));
      this.store.pipe(select(fromStore.getUsersList), takeUntil(this.unsubscribe$)).subscribe(
        state => {
          if (state) {
            this.usersList = state;
          }
        }
      );
    }
  }

  openConversation(roomInfo) {
    this.conversationStatus = false;
    this.selectedUser = roomInfo.user;
    this.roomId = roomInfo.roomId;

    // TODO set loading spinner
    setTimeout(() => {
      this.conversationStatus = true;
    }, 200);
  }

  closeChat(data) {
    this.conversationStatus = false;
  }
}
