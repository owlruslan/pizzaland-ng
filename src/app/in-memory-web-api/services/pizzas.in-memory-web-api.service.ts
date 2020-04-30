import {Injectable} from '@angular/core';
import {getStatusText, RequestInfo, ResponseOptions, STATUS} from 'angular-in-memory-web-api';
import {environment} from '@src/environments/environment';
import {APIService} from '@app/interfaces/api-service.interface';
import {userResponseData} from '@app/in-memory-web-api/data/user/user-response-data';
import {pizzasResponseData} from '@app/in-memory-web-api/data/user/pizzas-response.data';

@Injectable()
export class PizzasInMemoryWebAPIService implements APIService {
  readonly host = environment.host;
  readonly collectionName = 'pizzas';

  /**
   * HTTP GET interceptor.
   */
  get(reqInfo: RequestInfo) {
    const url = reqInfo.req.url;

    switch (url) {
      case `${this.host}/api/v1/pizzas`: {
        return this.getPizzas(reqInfo);
      }
    }

    return undefined; // let the default GET handle all others
  }

  /**
   * GET: `/api/v1/pizzas`.
   * Returns pizzas response
   */
  getPizzas(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const options: ResponseOptions = {
        body: pizzasResponseData,
        status: STATUS.OK
      };

      return this.finishOptions(options, reqInfo);
    });
  }

  /**
   * Helper
   */
  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;

    return options;
  }
}
