// Dependencies
import React from 'react';

// Components
import Nav from 'components/Nav';

// Routes configuration
import Routes from 'routes/index';

export default function App() {
  return (
    <div>
      <Nav />
      {Routes()}
    </div>
  );
}
