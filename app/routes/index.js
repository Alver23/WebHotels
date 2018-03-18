// Dependencies
import React from 'react';
import {
  Route,
  Switch,
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
