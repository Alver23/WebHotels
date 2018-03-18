// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  compose,
  bindActionCreators,
} from 'redux';

// Containers
import FormSearch from 'containers/FormSearch';

// Components
import Layout from 'components/Layout';
import HotelLists from 'components/HotelLists';
import LoadingIndicator from 'components/LoadingIndicator';

// Utils
import injectSaga from 'utils/injectSaga';

// Global Selectors
import { makeSelectHotels, makeSelectLoading } from 'containers/App/selectors';

// Global Redux actions
import * as ActionCreators from 'containers/App/actions';

// saga
import saga from './saga';

// Traductions
import messages from './messages';

class LandingPage extends React.Component {

  static propTypes = {
    loading: PropTypes.bool,
    hotels: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.array,
      PropTypes.object,
    ]),
    actions: PropTypes.shape({
      getHotels: PropTypes.func,
    }).isRequired,

  }

  componentDidMount() {
    this.props.actions.getHotels();
  }

  render() {
    const {
      hotels,
      loading,
    } = this.props;

    if (loading) {
      return (<LoadingIndicator />);
    }

    return (
      <Layout
        sideBar={<FormSearch />}
        title={messages.title}
        description={messages.description}
      >
        <HotelLists data={hotels} />
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

const mapStateToProps = createStructuredSelector({
  hotels: makeSelectHotels(),
  loading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'landingPage', reducer });
const withSaga = injectSaga({ key: 'landingPage', saga });

export default compose(
  withSaga,
  withConnect,
)(LandingPage);
