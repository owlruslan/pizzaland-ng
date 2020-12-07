import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { APIService } from '../../../../../core/src/lib/services/api-service.interface';
import { UserLoginResponse } from '../../../../../core/src/lib/models/user/user-login-response.model';
import { ResponseSuccess } from '../../../../../core/src/lib/models/response/response-success.model';
import { UserLoginRequest } from '../../../../../core/src/lib/models/user/user-login-request.model';
import { environment } from '../../../environments/environment';

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
