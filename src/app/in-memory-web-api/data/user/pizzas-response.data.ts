import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';
import mockGetPizzasResponse from '@app/mocks/pizzas/get-pizzas-response.mock';
import {ResponseSuccess} from '@app/models/response/response-success.model';

export const pizzasResponseData: ResponseSuccess<GetPizzasResponse> = new ResponseSuccess<GetPizzasResponse>()
pizzasResponseData.data = mockGetPizzasResponse;
