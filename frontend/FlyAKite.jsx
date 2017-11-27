import React from 'react';
import ReactDOM from 'react-dom';
//Components
 import Root from './components/root';
import configureStore from './store/store';
// testing:
import * as EventActions from './actions/event_actions';
import * as SessionActions from './actions/session_actions';
import { getIndex} from './actions/category_actions';
document.addEventListener("DOMContentLoaded", ()=>{
    const rootEl = document.getElementById('root');

    var store ={};
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
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