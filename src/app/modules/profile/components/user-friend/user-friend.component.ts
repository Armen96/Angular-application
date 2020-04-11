import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService, ChatService} from '../../../../services';
import {UsersInterface} from '../../../../interfaces/users.interface';
import {RoomsInterface} from '../../../../interfaces/rooms.interface';

@Component({
  selector: 'app-user-friend',
  templateUrl: './user-friend.component.html',
  styleUrls: ['./user-friend.component.css']
})
export class UserFriendComponent implements OnInit {
  @Output() openConversation = new EventEmitter();
  @Input() friends: UsersInterface[];
  usersList: UsersInterface[];
  me: UsersInterface;
  public shortId: string;

  constructor(protected authService: AuthService, protected chatService: ChatService) {
    this.me = authService.getUser();
  }

  ngOnInit(): void {
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
