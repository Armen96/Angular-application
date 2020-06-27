import { RecordsState } from '../../store/record';
import {AuthState} from '../../store/auth/selectors';

export interface AppState {
  records: RecordsState;
  auth: AuthState;
}
