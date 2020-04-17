import {AuthService} from './auth.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    localStorage.removeItem(environment.AUTH.TOKEN_HEADER_NAME);
    httpMock.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('FUNCTION searchPerson', () => {
    const dummyUserListResponse = {
      users: [
        {
          _id: '54sad2a1sd2a21asd',
          name: 'Armen Barsegyan',
          email: 'barsegyan96armen@gmail.com',
          password: '2$a45adsasda4sd54a5sd4x2x212221xzcxzczxczx',
          image: 'image_link',
          friends: []
        },
      ],
    };

    it('check response', () => {
      service.searchPerson({name: 'Armen'}).subscribe(data => {
        expect(data).toEqual(dummyUserListResponse);
      });

      const req = httpMock.expectOne(environment.LOCAL_REST_URL + environment.USERS.SEARCH);
      expect(req.request.method).toEqual('POST');
      req.flush(dummyUserListResponse);
    });
  });

  describe('FUNCTION isLoggedIn', () => {
    it('check response', () => {
      localStorage.setItem(environment.AUTH.TOKEN_HEADER_NAME, 'test');
      expect(service.isLoggedIn()).toEqual(true);
    });
  });

  describe('FUNCTION emailVerification', () => {
    it('check response', () => {
      const response = service.emailVerification('a@a.com');
      expect(response.status).toEqual(true);

      const response2 = service.emailVerification('aa.com');
      expect(response2.status).toEqual(false);
    });
  });

  describe('getUserList', () => {
    it('should work', () => {
      const dummyUserListResponse = [
          {
            _id: '54sad2a1sd2a21asd',
            name: 'Armen Barsegyan',
            email: 'barsegyan96armen@gmail.com',
            password: '2$a45adsasda4sd54a5sd4x2x212221xzcxzczxczx',
            image: 'image_link',
            friends: []
          }
      ];

      service.getUserList().subscribe(data => {
        expect(data).toEqual(dummyUserListResponse);
      });

      const req = httpMock.expectOne(environment.LOCAL_REST_URL + environment.USERS.ADMIN);
      expect(req.request.method).toEqual('POST');
      req.flush(dummyUserListResponse);
    });
  });
});
