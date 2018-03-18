// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import {
  intlShape,
  injectIntl,
} from 'react-intl';

import {
  Col,
  Row,
  Container,
} from 'reactstrap';

// Relative Path
import Wrapper from './Wrapper';

function Layout(props) {
  const {
    title,
    sideBar,
    children,
    description,
    intl: {
      formatMessage,
    },
  } = props;

  let layoutTitle = title;
  let layoutDescription = description;


  if (title instanceof Object) {
    layoutTitle = formatMessage(title);
  }

  if (description instanceof Object) {
    layoutDescription = formatMessage(description);
  }

  let sideBarToRender = '';
  let colContent = 12;

  if (sideBar) {
    colContent = 9;
    sideBarToRender = (
      <Col xs={12} sm={12} md={3} lg={3}>
        {sideBar}
      </Col>
    );
  }


  return (
    <div>
      <Helmet>
        {layoutTitle && <title>{layoutTitle}</title>}
        {description && <meta name="description" content={layoutDescription} />}
      </Helmet>
      <Container fluid>
        <Wrapper>
          <Row>
            {sideBarToRender}
            <Col xs={12} sm={12} md={colContent} lg={colContent}>
              {children}
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </div>
  );
}

Layout.propTypes = {
  intl: intlShape.isRequired,
  sideBar: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  description: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default injectIntl(Layout);
