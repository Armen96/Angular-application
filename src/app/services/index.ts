import { RecordsService } from './record/records.service';
import {AuthService} from './auth.service';
import {CommonService} from './common.service';

export const appServices: any[] = [
  RecordsService,
  AuthService,
  CommonService
];

export * from './record/records.service';
export * from './auth.service';
export * from './chat.service';
export * from './common.service';

