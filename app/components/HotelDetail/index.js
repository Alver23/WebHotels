// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';

// Components
import Start from 'components/Start';
import Carousel from 'components/Carousel';
import ListIcon from 'components/ListIcon';

// Relative Path
import Wrapper from './Wrapper';
import WrapperItem from './WrapperItem';

function HotelDetail(props) {
  const {
    item,
  } = props;

  const carousel = (item.images && item.images.length > 0) ? (<Carousel items={item.images} />) : null;
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
      <CardText><strong>Servicios del Hotel</strong></CardText>
      <ListIcon items={item.amenities} />
      {carousel}
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
