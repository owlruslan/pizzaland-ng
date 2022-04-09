import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TestBed} from '@angular/core/testing';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import mockUserLoginRequest from '../../mocks/user/user-login-request.mock';
import mockUserLoginResponse from '../../mocks/user/user-login-response.mock';
import {ResponseSuccess, UserLoginResponse} from '../../models';

import {UserService} from './user.service';

describe('UserService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let service: UserService;

  const unsubscribe = new Subject<void>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
      schemas: [NO_ERRORS_SCHEMA]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
    unsubscribe.next();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#login', () => {
    let url: string;

    beforeEach(() => {
      url = `${service.host}/api/v1/user/login`;
    });

    it('should return `Observable` of the `any`, that matching right data', () => {
      const mockResponse: ResponseSuccess<UserLoginResponse> = {
        data: mockUserLoginResponse,
        success: true
      };

      service.login(mockUserLoginRequest)
        .pipe(takeUntil(unsubscribe))
        .subscribe((response: any) => {
          expect(response).toEqual(mockResponse);
        });

      const testRequest: TestRequest = httpTestingController.expectOne(url);
      expect(testRequest.request.method).toBe('POST');

      testRequest.flush(mockResponse);
    });
  });
});
