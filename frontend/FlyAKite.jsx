import React from 'react';
import ReactDOM from 'react-dom';
//Components
 import Root from './components/root';
import configureStore from './store/store';
// testing:
import * as EventActions from './actions/event_actions';
import * as SessionActions from './actions/session_actions';
import { getIndex} from './actions/category_actions';
import * as RegistrationActions from './actions/registration_actions';



document.addEventListener("DOMContentLoaded", ()=>{
    const rootEl = document.getElementById('root');

    var store ={};
    console.log("bootstrap here", window.bootStrap);
    if (window.bootStrap) {
        const preloadedState = { session: { currentUser: window.bootStrap.currentUser, registrations: window.bootStrap.registrations }  };
        console.log(preloadedState);
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.deleteregistration = RegistrationActions.deleteRegistration;
    window.makeRegistration = RegistrationActions.makeRegistration;
    window.getIndex = getIndex;
    window.GetAllEvents = EventActions.GetAllEvents;
    window.getevent = EventActions.GetEvent;
    window.signup = SessionActions.signup;
    window.login = SessionActions.login;
    window.logout = SessionActions.logout;
    window.dispatch = store.dispatch;
    window.getState = store.getState;

    
    ReactDOM.render(<Root store={store}/>, root);
});