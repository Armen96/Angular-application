import { RecordsState } from '../../store/record';
import {AuthState} from '../../store/auth/selectors';
import {AdminState} from '../../store/admin/selectors';

export interface AppState {
  records: RecordsState;
  auth: AuthState;
  admin: AdminState;
}
