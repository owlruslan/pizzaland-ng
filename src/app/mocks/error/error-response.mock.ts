import {ResponseError} from '@app/models/response/response-error.model';

const mockErrorResponse = new ResponseError();
mockErrorResponse.error = 'Error';

export default mockErrorResponse;
