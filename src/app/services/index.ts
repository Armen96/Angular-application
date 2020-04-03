import { RecordsService } from './record/records.service';
import {AuthService} from './auth.service';
import {ChatService} from './chat.service';

export const appServices: any[] = [ RecordsService, AuthService, ChatService ];

export * from './record/records.service';
export * from './auth.service';
export * from './chat.service';

