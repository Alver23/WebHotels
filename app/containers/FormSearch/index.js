// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import { createStructuredSelector } from 'reselect';
import {
  Form,
  Input,
  Button,
  InputGroup,
  FormFeedback,
  InputGroupAddon,
} from 'reactstrap';

// Components
import LoadingIndicator from 'components/LoadingIndicator';

// Utils
import injectSaga from 'utils/injectSaga';

// Redux actions
import * as ActionCreators from 'containers/App/actions';

// Selectors
import { makeSelectLoading } from 'containers/App/selectors';

// saga
import saga from './saga';


class FormSearch extends React.Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    loading: PropTypes.bool,
    actions: PropTypes.shape({
      getHotels: PropTypes.func,
    }).isRequired,

  }

  handleSearch = (formData) => {
    const data = (formData.size === 0) ? null : formData;
    this.props.actions.getHotels(data);
  }

  renderInputGroup = ({ input, label, type, children, meta: { touched, error } }) => {
    const isValid = !!((touched && error));
    return (
      <InputGroup>
        <Input {...input} placeholder={label} type={type} invalid={isValid} />
        {children}
        {isValid && (<FormFeedback>{error}</FormFeedback>)}
      </InputGroup>
    );
  }

  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <div>
        <Form onSubmit={handleSubmit(this.handleSearch)}>
          <Field
            name="name"
            component={this.renderInputGroup}
            type="text"
            label="Ingrese el nombre del hotel"
          >
            <InputGroupAddon addonType="append">
              <Button type="submit" color="primary">Buscar</Button>
            </InputGroupAddon>
          </Field>
        </Form>
        {loading && (<LoadingIndicator />)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

const withSaga = injectSaga({ key: 'FormSearch', saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FormComponent = reduxForm({
  form: 'formSearchHotel',
})(FormSearch);


export default compose(
  withSaga,
  withConnect,
)(FormComponent);
