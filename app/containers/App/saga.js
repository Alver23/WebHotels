// Dependencies
import {
  call,
  put,
} from 'redux-saga/effects';

// Utils
import request from 'utils/request';
import { convertObjectToQueryString } from 'utils/helpers';

// Redux actions
import * as ActionCreators from './actions';


export function* getHotels(actions) {
  let queryString = '';
  if (actions.params) {
    queryString = convertObjectToQueryString(actions.params);
  }

  let requestURL = 'hotels';

  if (queryString) {
    requestURL += `?${queryString}`;
  }

  const options = {
    method: 'GET',
  };

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, options);
    yield put(ActionCreators.getHotelsSuccess(response));
  } catch (err) {
    yield put(ActionCreators.getHotelsError('Error al cargar los hoteles'));
  }
}
