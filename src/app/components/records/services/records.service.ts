import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from '../../../shared/services/app.service';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {RecordsInterface} from '../interfaces/records.interface';
import {RecordsDto} from '../interfaces/records.dto';

@Injectable({
  providedIn: 'root'
})
export class RecordsService extends AppService {

  constructor(protected http: HttpClient) {
    super(http);
    this.setDefaultServicePath(environment.RECORDS.SERVICE_PATH);
  }

  getRecords(): Observable<RecordsDto[]> {
    const url = this.getUrl(environment.RECORDS.SERVICE_PATH, '?_start=0&_limit=15');
    return this.http.get<RecordsInterface[]>(url);
  }
}
