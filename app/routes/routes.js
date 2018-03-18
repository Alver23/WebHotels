// Containers
import LandingPage from 'containers/LandingPage/Loadable';
import HotelDetail from 'containers/HotelDetail/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

/**
 * Object with all routes defined here
 * @returns {object} Object with routes for configure in app
 * @constructor
 */
export default function Routes() {
  return {
    LandingPage: {
      exact: true,
      path: '/',
      component: LandingPage,
    },
    HotelDetail: {
      exact: true,
      path: '/detail/:id',
      component: HotelDetail,
    },
    NotFoundPage: {
      path: '',
      component: NotFoundPage,
    },
  };
}
