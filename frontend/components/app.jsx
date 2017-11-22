import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavbarContainer from '../components/session/navbar_container';

// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>"rendered in app.jsx by root.jsx"</h1>
    <NavbarContainer />
    <h1> navbar container rendered above</h1>
  </div>
);

export default App;