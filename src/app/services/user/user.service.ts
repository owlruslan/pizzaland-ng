import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {APIService} from '@app/interfaces/api-service.interface';
import {UserLoginRequest} from '@app/models/user/user-login-request.model';
import {ResponseSuccess} from '@app/models/response/response-success.model';
import {UserLoginResponse} from '@app/models/user/user-login-response.model';

/**
 * Implementation of user APIs.
 */
@Injectable()
export class UserService implements APIService {
  readonly host = environment.host;

  constructor(private http: HttpClient) {
  }

  /**
   * POST: /api/v1/user/login
   * Login.
   */
  login(request: UserLoginRequest): Observable<ResponseSuccess<UserLoginResponse>> {
    return this.http.post<ResponseSuccess<UserLoginResponse>>(`${this.host}/api/v1/user/login`, request);
  }
}
