import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from '../../shared/services/app.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {RecordsInterface} from '../../interfaces/record/records.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordsService extends AppService {

  constructor(protected http: HttpClient) {
    super(http);
    this.setDefaultServicePath(environment.RECORDS.SERVICE_PATH);
  }

  getRecords(): Observable<RecordsInterface[]> {
    const url = this.getUrl(environment.RECORDS.SERVICE_PATH, '?_start=0&_limit=5');
    return this.http.get<RecordsInterface[]>(url);
  }

  createRecord(record: RecordsInterface): Observable<any> {
    const url = this.getUrl(environment.RECORDS.SERVICE_PATH, '');
    return this.http.post(url, record);
  }

  getRecordById(recordId: number): Observable<any> {
    const url = this.getUrl(environment.RECORDS.SERVICE_PATH, '/' + recordId);
    return this.http.get(url);
  }

  updateRecord(record: RecordsInterface): Observable<any> {
    const url = this.getUrl(environment.RECORDS.SERVICE_PATH, '/' + record.id);
    return this.http.put(url, record);
  }

  deleteRecord(recordId: number): Observable<any> {
    const url = this.getUrl(environment.RECORDS.SERVICE_PATH, '/' + recordId);
    return this.http.delete(url);
  }
}
