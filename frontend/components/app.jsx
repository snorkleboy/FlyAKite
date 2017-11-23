import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_util.jsx';

import NavbarContainer from '../components/session/navbar_container';
import SignUpPageContainer from '../components/session/signup_container';

const App = () => (
  <div>
    <switch>
      <AuthRoute exact path='/signup' component={SignUpPageContainer} />
      <Route exact path='/' component={NavbarContainer} />
    </switch>

  </div>
);

export default App;