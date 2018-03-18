// Dependencies
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

// Global Traductions
import messages from 'containers/App/messages';

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
      yield put(ActionCreators.getHotelError(messages.itemGetError));
    }
  } else {
    yield put(ActionCreators.getHotelError(messages.itemGetError));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield takeLatest(GET_HOTEL, getHotelById);
}
