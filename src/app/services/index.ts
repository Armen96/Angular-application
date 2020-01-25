import { RecordsService } from './record/records.service';
import {AuthService} from './auth/auth.service';

export const appServices: any[] = [ RecordsService, AuthService ];

export * from './record/records.service';
export * from './auth/auth.service';

