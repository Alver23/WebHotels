// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledCarousel } from 'reactstrap';

// Relative Path
import Wrapper from './Wrapper';
import { parseItems } from './helpers';

function Carousel(props) {
  const {
    items,
  } = props;
  return (
    <Wrapper>
      <UncontrolledCarousel items={parseItems(items)} />
    </Wrapper>
  );
}

Carousel.propTypes = {
  items: PropTypes.array,
};

export default Carousel;
