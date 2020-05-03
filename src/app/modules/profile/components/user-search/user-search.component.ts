import {Component, EventEmitter, Output} from '@angular/core';
import * as fromStore from '../../../../store/auth';
import {select, Store} from '@ngrx/store';
import {takeUntil} from 'rxjs/operators';
import {AppState} from '../../../../shared/ngrx/appState';
import {UsersInterface} from '../../../../interfaces/users.interface';
import {RoomsInterface} from '../../../../interfaces/rooms.interface';
import {AuthService, ChatService} from '../../../../services';
import { UnsubscriptionHandler } from 'arxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./style.css']
})
export class UserSearchComponent extends UnsubscriptionHandler {
  @Output() openConversation = new EventEmitter();
  public name = '';
  public usersList: UsersInterface[];
  public roomId = '';
  public me: UsersInterface;
  public shortId: string;

  constructor(private store: Store<AppState>, protected chatService: ChatService, protected authService: AuthService) {
    super();
    this.me = authService.getUser();
  }

  onSearch() {
    const name = this.name;
    this.name = '';

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

  conversation(user) {
    const userIds = {
      to_id: user['_id'],
      from_id: this.me['_id']
    };

    const roomInfo = {user: user, roomId: ''};
    this.addNewFriend(user);


    this.chatService.getRoomShortId(userIds).subscribe((response: {data: RoomsInterface}) => {
      this.shortId = response.data.shortId;
      roomInfo.roomId = this.shortId;
      this.chatService.joinToRoom(roomInfo.roomId);
      this.openConversation.emit(roomInfo);
    });
  }

  addNewFriend(user) {
    this.authService.addFriend(user).subscribe(data => { console.log(data); });

    // const friend = {
    //   _id: user['_id'],
    //   name: user['name'],
    //   image: user['image'],
    // };
    //
    // this.me.friends = [friend, ...this.me.friends];
    // this.store.dispatch(new fromStore.LoginSuccess(this.me));
  }
}
