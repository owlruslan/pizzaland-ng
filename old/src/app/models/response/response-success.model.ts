export class ResponseSuccess<T> {
  data: T | undefined;
  success = true;

  constructor(data?: T) {
    this.data = data;
  }
}
