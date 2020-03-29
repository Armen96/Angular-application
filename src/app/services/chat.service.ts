import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  public sendMessage(message) {
    console.log(message);
    this.socket.emit('new-message', message);
  }

  public getNewMessage() {
    return this.socket.fromEvent("new-message").pipe(map( data => data ));
  }

  public getMessages() {
    this.socket.emit('messages');
    return this.socket.fromEvent("messages").pipe(map( data => data ));
  }
}
