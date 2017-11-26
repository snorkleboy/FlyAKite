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

import NavbarContainer from './session/navbar_container';
import SignUpPageContainer from './session/signup_container';
import EventListContainer from './events/eventlist_container';
import ShowPageContainer from './events/show_container';
import CreateEventContainer from './events/create_container';

const App = () => (
  <div className="Router-level-div">
    <switch>
      <AuthRoute exact path='/signup' component={SignUpPageContainer} />
      <Route path='/' component={NavbarContainer} />
    </switch>
    <switch>
      <Route exact path="/events/:eventId" component={ShowPageContainer} />
      <ProtectedRoute exact path="/events/create" component={CreateEventContainer } />
      <Route exact path='/' component={EventListContainer} />
    </switch>
  </div>
);

export default App;

