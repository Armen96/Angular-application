import { RecordsService } from './record/records.service';
import {AuthService} from './auth.service';
import {ChatService} from './chat.service';
import {CommonService} from './common.service';

export const appServices: any[] = [ RecordsService, AuthService, ChatService, CommonService ];

export * from './record/records.service';
export * from './auth.service';
export * from './chat.service';
export * from './common.service';

