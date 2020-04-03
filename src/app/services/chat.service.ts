import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {map} from 'rxjs/operators';
import {AppService} from '../shared/services/app.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ChatService extends AppService {

  constructor(private socket: Socket, public http: HttpClient) {
    super(http);
  }

  public sendMessage(message, roomId) {
    this.socket.emit('new-message', roomId, message);
  }

  public getNewMessage() {
    return this.socket.fromEvent("new-message").pipe(map( data => data ));
  }

  public getAllMessages(roomId) {
    this.socket.emit('messages', roomId);
    return this.socket.fromEvent("messages").pipe(map( data => data ));
  }

  public joinToRoom(roomId) {
    this.socket.emit('joinToRoom', roomId);
  }

  public leaveTheRoom(roomId) {
    this.socket.emit('leaveTheRoom', roomId);
  }

  getRoomShortId(userIds) {
    const url = this.getUrl(environment.USERS.ROOM, '');
    return this.http.post(url, userIds);
  }
}
