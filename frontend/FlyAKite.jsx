import React from 'react';
import ReactDOM from 'react-dom';
//Components
 import Root from './components/root';
import configureStore from './store/store';

// testing:
import * as SessionAPI from './util/sessionAPI';

document.addEventListener("DOMContentLoaded", ()=>{

    window.signup = SessionAPI.signup;
    window.login = SessionAPI.login;
    window.logout = SessionAPI.logout;


    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});