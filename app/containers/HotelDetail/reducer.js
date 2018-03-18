// Dependencies
import { fromJS } from 'immutable';

// Constants
import {
  GET_HOTEL,
  GET_HOTEL_ERROR,
  GET_HOTEL_SUCCESS,
} from './constants';

const initialState = fromJS({
  hotel: false,
  loading: false,
  response: {
    type: false,
    message: false,
  },
});


function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTEL:
      return state
        .set('loading', true);
    case GET_HOTEL_SUCCESS:
      return state
        .set('loading', false)
        .set('hotel', action.response);
    case GET_HOTEL_ERROR:
      return state
        .set('loading', false)
        .set('hotel', false)
        .setIn(['response', 'message'], 'error')
        .setIn(['response', 'message'], action.response);
    default:
      return state;
  }
}

export default reducer;
