import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {Subject} from 'rxjs';

import {PizzasService} from './pizzas.service';

describe('PizzasService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let service: PizzasService;

  const unsubscribe = new Subject<void>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PizzasService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PizzasService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
    unsubscribe.next();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
