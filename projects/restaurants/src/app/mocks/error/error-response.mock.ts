import { ResponseError } from '../../../../../core/src/lib/models';

const mockErrorResponse = new ResponseError();
mockErrorResponse.error = 'Error';

export default mockErrorResponse;
