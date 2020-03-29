import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../shared/ngrx/appState';
import * as fromStore from '../../../store/auth';
import {takeUntil} from 'rxjs/operators';
import {UnsubscriptionHandler} from '../../../shared/unsubscription-handler/unsubscription-handler';
import {UsersInterface} from '../../../interfaces/auth/users.interface';
import {AuthService} from '../../../services';
import {ChatService} from '../../../services/chat.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends UnsubscriptionHandler implements OnInit {
  public name = '';
  public message = '';
  public usersList: UsersInterface[];
  public selectedUser: UsersInterface;
  public conversation = [];
  public me;

  constructor(private store: Store<AppState>, private authService: AuthService, private chatService: ChatService) {
    super();
    this.me = authService.getUser();
    console.log(this.me);
  }

  ngOnInit() {
    this.chatService.getMessages().subscribe((message) => {
      // @ts-ignore
      this.conversation = [...message];
    });

    this.chatService.getNewMessage().subscribe((message) => {
      this.conversation.push(message);
    });
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
    this.selectedUser = user;
    console.log('user', user);
  }

  onSend() {
    const date = new Date();
    const generatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    const newMessage = {
      message: this.message,
      user_id: this.me['_id'],
      created_at: generatedDate
    };

    this.chatService.sendMessage(newMessage);
    this.message = '';
  }
}
