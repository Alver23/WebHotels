// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  compose,
  bindActionCreators,
} from 'redux';

import {
  Row,
  Col,
  Container,
} from 'reactstrap';

// Components
import Layout from 'components/Layout';
import HotelDetailComponent from 'components/HotelDetail';
import LoadingIndicator from 'components/LoadingIndicator';

// Utils
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

// Selectors
import {
  makeSelectHotelDetail,
  makeSelectLoading,
} from './selectors';

// Redux actions
import * as ActionCreators from './actions';

// Redux reducers
import reducer from './reducer';

// Saga
import saga from './saga';

// Traduction
import messages from './messages';

class HotelDetail extends React.Component {

  static propTypes = {
    loading: PropTypes.bool,
    match: PropTypes.object,
    hotel: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.array,
      PropTypes.object,
    ]),
    actions: PropTypes.shape({
      getHotelById: PropTypes.func,
    }).isRequired,

  }

  componentDidMount() {
    const {
      match: {
        params,
      },
    } = this.props;
    this.props.actions.getHotelById(params.id);
  }

  render() {
    const {
      hotel,
      loading,
    } = this.props;

    if (loading || !hotel) {
      return (<LoadingIndicator />);
    }

    return (
      <Layout
        title={messages.title}
        description={messages.description}
      >
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <HotelDetailComponent item={hotel} />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

const mapStateToProps = createStructuredSelector({
  hotel: makeSelectHotelDetail(),
  loading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'hotelDetail', reducer });
const withSaga = injectSaga({ key: 'hotelDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HotelDetail);

