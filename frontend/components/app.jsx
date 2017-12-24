import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import {
  withRouter,
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

class App extends React.Component {
  constructor(props){
    super(props)

  }
      

    render(){
      return(
      <div className="Router-level-div">
        <Switch>
          <Route exact path='/signup' component={SignUpPageContainer} />
          <Route path='/' component={NavbarContainer} />
        </Switch>

      </div>
    );
  }
}



export default withRouter(connect()(App));

