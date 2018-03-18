// Constants
import {
  GET_HOTEL,
  GET_HOTEL_ERROR,
  GET_HOTEL_SUCCESS,
} from './constants';

/**
 * Get hotels from server
 * @returns {{type}} Object
 */
export function getHotelById(id) {
  return {
    id,
    type: GET_HOTEL,
  };
}

/**
 * Get hotels from server succesfully
 * @param response
 * @returns {{response: *, type}}
 */
export function getHotelSuccess(response) {
  return {
    response,
    type: GET_HOTEL_SUCCESS,
  };
}

/**
 * Error
 * @param response
 * @returns {{response: *, type}}
 */
export function getHotelError(response) {
  return {
    response,
    type: GET_HOTEL_ERROR,
  };
}

