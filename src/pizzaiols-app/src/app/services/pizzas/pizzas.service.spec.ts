import {async, TestBed} from '@angular/core/testing';

import {PizzasService} from './pizzas.service';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import mockUserToken from '../../mocks/user/user-token.mock';
import mockGetPizzasResponse from '../../mocks/pizzas/get-pizzas-response.mock';
import { GetPizzasResponse, ResponseSuccess } from '../../models';

describe('app.services.pages.user.PizzasService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let service: PizzasService;

  const unsubscribe = new Subject<void>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PizzasService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PizzasService);
  }));

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
    unsubscribe.next();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xdescribe('#getPizzas', () => {
    let url: string;

    beforeEach(() => {
      url = `${service.host}/api/v1/pizzas`;
    });

    it('should return `Observable` of the `any`, that matching right data', () => {
      const mockResponse: ResponseSuccess<GetPizzasResponse> = {
        data: mockGetPizzasResponse,
        success: true
      };

      service.getPizzas(mockUserToken)
        .pipe(takeUntil(unsubscribe))
        .subscribe((response: any) => {
          expect(response).toEqual(mockResponse);
        });

      const testRequest: TestRequest = httpTestingController.expectOne(url);
      expect(testRequest.request.method).toBe('GET');

      testRequest.flush(mockResponse);
    });
  });
});
