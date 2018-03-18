// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Icon from 'components/Icon';

// Relative Path
import Wrapper from './Wrapper';

class ListIcon extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  renderIcons = (icons) => icons.map((name, index) => (
    <Icon key={index.toString()} name={name} />
      ))

  render() {
    const {
      items,
    } = this.props;

    return (
      <Wrapper>
        {this.renderIcons(items)}
      </Wrapper>
    );
  }
}
export default ListIcon;
