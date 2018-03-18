// Dependencies
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

// Utils
import request from 'utils/request';

// Constants
import {
  GET_HOTEL,
} from './constants';

// Redux actions
import * as ActionCreators from './actions';


export function* getHotelById(params) {
  if (params && params.id) {
    const requestURL = `hotel/${params.id}`;

    const options = {
      method: 'GET',
    };

    try {
      // Call our request helper (see 'utils/request')
      const response = yield call(request, requestURL, options);
      yield put(ActionCreators.getHotelSuccess(response));
    } catch (err) {
      yield put(ActionCreators.getHotelError('Error al cargar el detalle del hotel'));
    }
  } else {
    yield put(ActionCreators.getHotelError('Error al cargar el detalle del hotel'));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield takeLatest(GET_HOTEL, getHotelById);
}
