import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UsersInterface} from '../../../../interfaces/users.interface';
import {ChatService} from '../../../../services/chat.service';
import {AuthService} from '../../../../services';
import {RoomsInterface} from '../../../../interfaces/rooms.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: []
})
export class UserListComponent {
  @Input() usersList: UsersInterface[];
  @Output() openConversation = new EventEmitter();
  public me: UsersInterface;
  public shortId: string;

  constructor(protected chatService: ChatService, protected authService: AuthService) {
    this.me = authService.getUser();
  }

  conversation(user) {
    const userIds = {
      to_id: user['_id'],
      from_id: this.me['_id']
    };

    const roomInfo = {
      user: user,
      roomId: ''
    };

    this.chatService.getRoomShortId(userIds).subscribe((response: {data: RoomsInterface}) => {
      this.shortId = response.data.shortId;
      roomInfo.roomId = this.shortId;
      this.chatService.joinToRoom(roomInfo.roomId);
      this.openConversation.emit(roomInfo);
    });
  }
}
