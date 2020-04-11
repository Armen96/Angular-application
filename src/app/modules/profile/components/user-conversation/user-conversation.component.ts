import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../../services';
import {UsersInterface} from '../../../../interfaces/users.interface';
import {ConversationInterface} from '../../../../interfaces/conversation.interface';
import {ChatService} from '../../../../services';
declare var $: any;

@Component({
  selector: 'app-user-conversation',
  templateUrl: './user-conversation.component.html',
  styleUrls: ['./style.css']
})
export class UserConversationComponent implements OnInit {
  @Input() selectedUser: UsersInterface;
  @Input() roomId: string;
  @Output() closeChat = new EventEmitter();
  public message = '';
  public me: UsersInterface;
  public conversation: ConversationInterface[] = [];

  constructor(protected authService: AuthService, protected chatService: ChatService) {
    this.me = authService.getUser();
  }

  ngOnInit(): void {
    if (this.roomId) {
      this.chatService.getAllMessages(this.roomId).subscribe((message: ConversationInterface[]) => {
        this.conversation = message;
        $(".messages").animate({ scrollTop: $(document).height() }, "fast");
      });

      this.chatService.getNewMessage().subscribe((message: ConversationInterface) => {
        this.conversation.push(message);
        $(".messages").animate({ scrollTop: $(document).height() }, "fast");
      });
    }
  }

  onSendMessage() {
    const date = new Date();
    const generatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    const newMessage = {
      message: this.message,
      to_id: this.selectedUser['_id'],
      from_id: this.me['_id'],
      status: 0,
      short_id: this.roomId,
      created_at: generatedDate
    };

    this.message = '';
    if (this.roomId) {
      this.chatService.sendMessage(newMessage, this.roomId);
    }
  }

  leaveTheRoom() {
    this.chatService.leaveTheRoom(this.roomId);
    this.closeChat.emit(this.roomId);
  }
}
