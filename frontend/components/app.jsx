import React from 'react';
import { connect } from 'react-redux';
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

class App extends React.Component {

    //start up

    render(){
      return(
      <div className="Router-level-div">
        <Switch>
          <AuthRoute exact path='/signup' component={SignUpPageContainer} />
          <Route path='/' component={NavbarContainer} />
        </Switch>
        <Switch>
          <Route exact path="/events/:eventId" component={ShowPageContainer} />
          <Route exact path="/events/:eventId/edit" component={CreateEventContainer} />
          <ProtectedRoute exact path="/create" component={CreateEventContainer } />
          <Route exact path='/' component={EventListContainer} />
        </Switch>
      </div>
    );
  }
}
export default connect(null, null)(App);

