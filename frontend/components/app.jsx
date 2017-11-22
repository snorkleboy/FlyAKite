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
import SignUpPageContainer from '../components/session/signup_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <switch>
      <Route exact path='/signup' component={SignUpPageContainer} />
      <Route exact path='/' component={NavbarContainer} />
    </switch>

  </div>
);

export default App;