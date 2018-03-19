// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
  Card,
  Button,
  CardText,
  CardTitle,
  CardFooter,
} from 'reactstrap';

// Components
import Start from 'components/Start';
import Carousel from 'components/Carousel';
import ListIcon from 'components/ListIcon';

// Traductions
import messages from './messages';

// Relative Path
import Wrapper from './Wrapper';
import WrapperItem from './WrapperItem';

function HotelDetail(props) {
  const {
    item,
  } = props;

  const carousel = (item.images && item.images.length > 0) ? (<Carousel items={item.images} />) : null;
  const amenities = (item.amenities && item.amenities.length > 0) ? (<ListIcon items={item.amenities} />) : null;

  return (
    <Card body>
      <Wrapper>
        <WrapperItem>
          <CardTitle tag={'h2'}>{item.name}</CardTitle>
        </WrapperItem>
        <WrapperItem>
          <Start value={item.starts} />
        </WrapperItem>
      </Wrapper>
      <CardText>{item.address}</CardText>
      <CardText><strong><FormattedMessage {...messages.hotelServices} /></strong></CardText>
      {amenities}
      {carousel}
      <CardFooter>
        <Button
          to={'/'}
          tag={Link}
          color="primary"
        >
          <FormattedMessage {...messages.buttonBack} />
        </Button>
      </CardFooter>
    </Card>
  );
}

HotelDetail.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
};

export default HotelDetail;
