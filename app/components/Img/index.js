// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';

function Img(props) {
  return (
    <VisibilitySensor>
      <Image {...props} />
    </VisibilitySensor>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  loader: PropTypes.element,
};

export default Img;
