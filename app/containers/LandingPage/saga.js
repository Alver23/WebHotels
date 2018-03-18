// Dependencies
import { takeLatest } from 'redux-saga/effects';

// Global Saga
import { getHotels } from 'containers/App/saga';

// Global Constants
import {
  GET_HOTELS,
} from 'containers/App/constants';

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSagas() {
  yield takeLatest(GET_HOTELS, getHotels);
}
