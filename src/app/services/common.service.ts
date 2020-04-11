import {Injectable} from '@angular/core';
import {AppService} from '../shared/services/app.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class CommonService extends AppService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getTechnologies(): Observable<string[]> {
    return of([
      'Angular@latest, RxJS, NgRx, TypeScript, Jasmin, UI Infragistics',
      'Node.js, Express, MongoDB, Sqlite3',
      'CI&CD Jenkins, TravisCI',
      'Docker, Kubernetes, Firebase, AWS ES2, S3'
    ]);
  }
}
