import { Restaurant } from './restaurant';

export class RestaurantModel implements Restaurant {
  id: string;
  name: string;
  rating: number;
  address: string;

  constructor(
    id: string,
    name: string,
    rating: number,
    address: string,
  ) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.address = address;
  }
}
