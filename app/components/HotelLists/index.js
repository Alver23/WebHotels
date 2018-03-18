// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
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
import Icon from 'components/Icon';

// Constants
import { API_URL } from 'utils/constants';

// Relative Path
import Wrapper from './Wrapper';
import WrapperItem from './WrapperItem';
import WrapperIcon from './WrapperIcon';

class HotelLists extends React.Component {

  renderImage = (item) => {
    const image = (item && item.length > 0) ? item[0] : false;
    if (image) {
      return (
        <CardImg
          top
          width="100%"
          src={`${API_URL}${image.path}`}
          alt={image.name}
        />
      );
    }
    return null;
  }

  renderIcons = (icons) => {
    if (icons && icons.length > 0) {
      const iconToRender = icons.map((name, index) => <Icon key={index.toString()} name={name} />);
      return (
        <WrapperIcon>
          {iconToRender}
        </WrapperIcon>
      );
    }
    return null;
  }

  renderStart = (start) => {
    if (start) {
      return (
        <ReactStars
          count={5}
          size={24}
          edit={false}
          value={start}
          color2={'#ffd700'}
        />
      );
    }
    return null;
  }


  /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  renderLists = (data) => data.map((item, index) => {
    const price = item.price.$numberDecimal;
    // const amenities
    return (
      <WrapperItem key={index.toString()}>
        <Card>
          {this.renderImage(item.images)}
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {this.renderStart(item.starts)}
            <CardText>apartir de</CardText>
            <CardSubtitle style={{ color: '#EA6422' }}>COP <strong>{parseFloat(price)}</strong></CardSubtitle>
            {this.renderIcons(item.amenities)}
          </CardBody>
          <CardFooter>
            <Button
              tag={Link}
              color="primary"
              to={`detail/${item._id}`}
            >
              Ver hotel
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

HotelLists.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

export default HotelLists;
