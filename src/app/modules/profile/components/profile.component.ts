import {Component} from '@angular/core';
import {UnsubscriptionHandler} from '../../../shared/unsubscription-handler/unsubscription-handler';
import {UsersInterface} from '../../../interfaces/users.interface';
import {AuthService} from '../../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent extends UnsubscriptionHandler {
  public selectedUser: UsersInterface;
  public roomId = '';
  public conversationStatus = false;
  public friends: UsersInterface[];

  constructor(protected authService: AuthService) {
    super();
    // const authUser = authService.getUser();
    // this.friends = authUser.friends;
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
