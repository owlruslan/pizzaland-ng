import {Injectable} from '@angular/core';
import {getStatusText, InMemoryDbService, RequestInfo, ResponseOptions} from 'angular-in-memory-web-api';
import {userResponseData} from '@app/in-memory-web-api/data/user/user-response-data';
import {UserInMemoryWebAPIService} from '@app/in-memory-web-api/services/user.in-memory-web-api.service';
import {PizzasInMemoryWebAPIService} from '@app/in-memory-web-api/services/pizzas.in-memory-web-api.service';
import {pizzasResponseData} from '@app/in-memory-web-api/data/user/pizzas-response.data';

@Injectable()
export class AppInMemoryWebAPIService implements InMemoryDbService {
  userInMemoryWebAPIService;
  pizzasInMemoryWebAPIService;

  createDb() {
    this.userInMemoryWebAPIService = new UserInMemoryWebAPIService();
    this.pizzasInMemoryWebAPIService = new PizzasInMemoryWebAPIService();

    return {
      userResponseData,
      pizzasResponseData
    };
  }

  /**
   * HTTP GET interceptor.
   */
  get(reqInfo: RequestInfo) {
    const url = reqInfo.req.url;
    const collectionName = reqInfo.collectionName;

    // User
    if (collectionName === this.userInMemoryWebAPIService.collectionName) {
      return this.userInMemoryWebAPIService.get(reqInfo);
    }

    // Pizzas
    if (collectionName === this.pizzasInMemoryWebAPIService.collectionName) {
      return this.pizzasInMemoryWebAPIService.get(reqInfo);
    }

    return undefined; // let the default GET handle all others
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
