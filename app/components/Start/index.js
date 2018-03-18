// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

function Start(props) {
  const {
    edit,
    size,
    count,
    value,
  } = props;

  const listProps = {
    edit,
    size,
    count,
    value,
  };

  return (
    <ReactStars {...listProps} />
  );
}

Start.defaultProps = {
  edit: false,
  size: 24,
  count: 5,
};

Start.propTypes = {
  edit: PropTypes.bool,
  size: PropTypes.number,
  count: PropTypes.number,
  value: PropTypes.number.isRequired,
};

export default Start;
