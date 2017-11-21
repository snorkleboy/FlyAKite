import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    "rendered in app.jsx by root.jsx"
  </div>
);

export default App;