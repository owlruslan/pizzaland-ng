import {TestBed} from '@angular/core/testing';
import mockRestaurants from "./restaurants.mock";
import {RestaurantsService} from "./restaurants.service";


describe('RestaurantsService', () => {
  let service: RestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsService);
  });

  it('should load restaurants', () => {
    const result = service.getRestaurants();
    expect(result).toEqual(mockRestaurants)
  });

  it('should load restaurant by id', () => {
    const id = '0'
    const result = service.getRestaurant(id);
    expect(result).toEqual(mockRestaurants[+id])
  })
});
