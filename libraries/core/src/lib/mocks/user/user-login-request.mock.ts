import { UserLoginRequest } from '@app/models/user/user-login-request.model';

const mockUserLoginRequest = new UserLoginRequest();
mockUserLoginRequest.username = 'USERNAME';
mockUserLoginRequest.password = 'PASSWORD';

export default mockUserLoginRequest;
