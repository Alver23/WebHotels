// Constants
import {
  GET_HOTELS,
  GET_HOTELS_ERROR,
  GET_HOTELS_SUCCESS,
} from './constants';

/**
 * Get hotels from server
 * @returns {{type}} Object
 */
export function getHotels(params = null) {
  return {
    params,
    type: GET_HOTELS,
  };
}

/**
 * Get hotels from server succesfully
 * @param response
 * @returns {{response: *, type}}
 */
export function getHotelsSuccess(response) {
  return {
    response,
    type: GET_HOTELS_SUCCESS,
  };
}

/**
 * Error
 * @param response
 * @returns {{response: *, type}}
 */
export function getHotelsError(response) {
  return {
    response,
    type: GET_HOTELS_ERROR,
  };
}
