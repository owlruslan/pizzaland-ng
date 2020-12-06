import { ResponseError } from '../../../../../../../libraries/core/src/lib/models/response/response-error.model'

export interface State {
  errorResponse: ResponseError;
}

export const initialState: State = {
  errorResponse: new ResponseError(),
};
