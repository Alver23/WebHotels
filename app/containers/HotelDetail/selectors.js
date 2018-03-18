// Dependencies
import { createSelector } from 'reselect';

const selectHotelDetailPage = (state) => state.get('hotelDetail');

const makeSelectHotelDetail = () => createSelector(
  selectHotelDetailPage,
  (homeState) => homeState.get('hotel')
);

const makeSelectLoading = () => createSelector(
  selectHotelDetailPage,
  (homeState) => homeState.get('loading')
);

export {
  makeSelectLoading,
  selectHotelDetailPage,
  makeSelectHotelDetail,
};
