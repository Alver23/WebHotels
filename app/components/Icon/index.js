// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Img from 'components/Img';

import Wrapper from './Wrapper';

function Icon(props) {
  const {
    name,
  } = props;

  const icon = require(`assets/icons/amenities/${name}.svg`); // eslint-disable-line global-require
  return (
    <Wrapper>
      <Img src={icon} />
    </Wrapper>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
