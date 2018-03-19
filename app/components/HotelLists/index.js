// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  CardSubtitle,
  Button,
} from 'reactstrap';

// Components
import Start from 'components/Start';
import ListIcon from 'components/ListIcon';

// Constants
import { API_URL } from 'utils/constants';

// Traductions
import messages from './messages';

// Relative Path
import Wrapper from './Wrapper';
import WrapperItem from './WrapperItem';

class HotelLists extends React.Component {

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.array,
    ]),
  }

  renderImage = (item) => {
    const image = (item && item.length > 0) ? item[0] : false;
    if (image) {
      return (
        <CardImg
          top
          width="100%"
          alt={image.name}
          src={`${API_URL}${image.path}`}
        />
      );
    }
    return null;
  }


  /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  renderLists = (data) => data.map((item, index) => {
    const price = item.price.$numberDecimal;
    const amenities = (item.amenities && item.amenities.length > 0) ? (<ListIcon items={item.amenities} />) : null;
    // const amenities
    return (
      <WrapperItem key={index.toString()}>
        <Card>
          {this.renderImage(item.images)}
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <Start value={item.starts} />
            <CardText><FormattedMessage {...messages.textPrice} /></CardText>
            <CardSubtitle style={{ color: '#EA6422' }}>COP <strong>{parseFloat(price)}</strong></CardSubtitle>
            {amenities}
          </CardBody>
          <CardFooter>
            <Button
              tag={Link}
              color="primary"
              to={`detail/${item._id}`}
            >
              <FormattedMessage {...messages.buttonViewHotel} />
            </Button>
          </CardFooter>
        </Card>
      </WrapperItem>
    );
  })

  render() {
    const {
      data,
    } = this.props;

    console.log(data);

    if (data && data.length > 0) {
      return (
        <Wrapper>
          {this.renderLists(data)}
        </Wrapper>
      );
    }
    return null;
  }
}

export default HotelLists;
