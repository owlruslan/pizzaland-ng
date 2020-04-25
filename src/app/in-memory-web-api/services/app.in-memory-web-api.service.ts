import {Injectable} from '@angular/core';
import {getStatusText, InMemoryDbService, RequestInfo, ResponseOptions} from 'angular-in-memory-web-api';
import {environment} from '@src/environments/environment';
import {APIService} from '@app/interfaces/api-service.interface';
import {userResponseData} from '@app/in-memory-web-api/data/user/user-response-data';
import {UserInMemoryWebAPIService} from '@app/in-memory-web-api/services/user.in-memory-web-api.service';

@Injectable()
export class AppInMemoryWebAPIService implements InMemoryDbService, APIService {

  readonly host = environment.host;

  userInMemoryWebAPIService;

  createDb() {
    this.userInMemoryWebAPIService = new UserInMemoryWebAPIService();

    return {
      userResponseData,
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
