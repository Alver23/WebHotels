// Dependencies
import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Nav from 'components/Nav';

// Routes configuration
import Routes from 'routes/index';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Nav />
      {Routes()}
    </div>
  );
}
