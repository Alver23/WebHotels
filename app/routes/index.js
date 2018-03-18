// Dependencies
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// Relative imports
import RoutesApp from './routes';

export default function Routes() {
  const routes = Object.entries(RoutesApp()).map(([key, route]) => (<Route key={`route-${key}`} {...route} />));
  return (
    <Switch>
      {routes}
    </Switch>
  );
}
