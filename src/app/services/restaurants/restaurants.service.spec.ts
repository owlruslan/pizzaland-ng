import { TestBed } from '@angular/core/testing';

import { RestaurantsService } from './restaurants.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RestaurantsService', () => {
  let service: RestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RestaurantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
