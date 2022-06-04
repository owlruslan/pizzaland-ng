import {Restaurant} from './restaurant';
import {RestaurantModel} from './restaurant.model';

const mockRestaurants: Restaurant[] = [];

// Fill in array of restaurants.
for (let i = 0; i < 24; i++) {
  const id = i.toString();
  const name = `Restaurant${i}`;
  const rating = 5.0;
  const address = `Address Street №${i}`;

  mockRestaurants.push(
    new RestaurantModel(
      id,
      name,
      rating,
      address),
  );
}

export default mockRestaurants;
