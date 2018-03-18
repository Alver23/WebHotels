/**
 * To convert object to query string for URL
 * @param  {object} params variables in object
 * @return {string}         Query string for URL
 */
export function convertObjectToQueryString(params) {
  if (typeof params !== 'undefined' && params) {
    const queryString = [];

    Object.entries(params).forEach(([paramName, paramValue]) => {
      queryString.push(`${paramName}=${paramValue}`);
    });

    return queryString.join('&');
  }

  return '';
}
