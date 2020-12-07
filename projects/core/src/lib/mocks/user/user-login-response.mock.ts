import { UserLoginResponse } from '../../models';

const mockUserLoginResponse = new UserLoginResponse();
mockUserLoginResponse.token = 'TOKEN';
// TODO: add date
mockUserLoginResponse.expiresAt = 'DATE';

export default mockUserLoginResponse;
