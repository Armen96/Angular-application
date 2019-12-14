import { CommonModule } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import {RecordsService} from './records.service';
import {take} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

describe('RecordsService', () => {
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CommonModule],
      providers: [RecordsService]
    });
  });

  describe('getRecords', () => {
    it('should call the correct URL and method', inject(
      [HttpTestingController, RecordsService],
      (httpMock: HttpTestingController, service: RecordsService) => {
        service
          .getRecords()
          .pipe(take(1))
          .subscribe(resp => {
            expect(resp).toBeNull();
          });

        const req = httpMock.expectOne(environment.REST_URL + environment.RECORDS.SERVICE_PATH + '?_start=0&_limit=5');
        expect(req.request.method).toBe('GET');
        req.flush(null);
      }
    ));
  });

  describe('createRecord()', () => {
    it('should call the correct URL and method', inject(
      [HttpTestingController, RecordsService],
      (httpMock: HttpTestingController, service: RecordsService) => {
        const payload = {
          body: 'test',
          title: 'test',
          userId: 1,
          id: 101
        };

        service.createRecord(payload)
          .pipe(take(1))
          .subscribe(resp => {
            expect(resp).toBeNull();
          });

        const req = httpMock.expectOne(environment.REST_URL + environment.RECORDS.SERVICE_PATH);
        expect(req.request.method).toBe('POST');
        req.flush(null);
      }
    ));
  });
});
