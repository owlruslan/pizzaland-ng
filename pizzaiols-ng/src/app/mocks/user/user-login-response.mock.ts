import {UserLoginResponse} from '@app/models/user/user-login-response.model';

const mockUserLoginResponse = new UserLoginResponse();
mockUserLoginResponse.token = 'TOKEN';
// TODO: add date
mockUserLoginResponse.expiresAt = 'DATE';

export default mockUserLoginResponse;
