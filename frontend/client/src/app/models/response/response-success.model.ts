export class ResponseSuccess<T> {
  data: T;
  success = true;

  constructor (data?: T) {
    this.data = data;
  }
}
