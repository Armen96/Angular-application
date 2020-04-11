import {NgModule} from '@angular/core';
import {ProfileComponent} from './components/profile.component';
import {UserConversationComponent} from './components/user-conversation/user-conversation.component';
import {UserSearchComponent} from './components/user-search/user-search.component';
import {UserFriendComponent} from './components/user-friend/user-friend.component';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {ChatService} from '../../services';
const config: SocketIoConfig = { url: 'http://localhost:4205', options: {} };

@NgModule({
  declarations: [
    ProfileComponent,
    UserConversationComponent,
    UserSearchComponent,
    UserFriendComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    ChatService
  ]
})
export class ProfileModule {
}
