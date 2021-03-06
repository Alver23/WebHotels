// Dependencies
import { fromJS } from 'immutable';

// Constants
import {
  GET_HOTELS,
  GET_HOTELS_ERROR,
  GET_HOTELS_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  hotels: false,
  loading: false,
  error: false,
  response: {
    type: false,
    message: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTELS:
      return state
        .set('loading', true);
    case GET_HOTELS_SUCCESS:
      return state
        .set('loading', false)
        .set('hotels', action.response);
    case GET_HOTELS_ERROR:
      return state
        .set('loading', false)
        .set('hotels', false)
        .setIn(['response', 'message'], 'error')
        .setIn(['response', 'message'], action.response);
    default:
      return state;
  }
}

export default appReducer;
