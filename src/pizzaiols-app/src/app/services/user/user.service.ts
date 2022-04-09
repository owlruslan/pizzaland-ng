import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ResponseSuccess} from '../../models/response/response-success.model';
import {UserLoginRequest} from '../../models/user/user-login-request.model';
import {UserLoginResponse} from '../../models/user/user-login-response.model';
import {APIService} from '../api-service.interface';

/**
 * Implementation of user APIs.
 */
@Injectable({providedIn: 'root'})
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
