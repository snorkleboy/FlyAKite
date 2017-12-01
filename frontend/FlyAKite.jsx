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
import * as BookmarkActions from './actions/bookmark_actions';


document.addEventListener("DOMContentLoaded", ()=>{
    const rootEl = document.getElementById('root');

    var store ={};
    if (window.bootStrap) {
        const preloadedState = { 
            session: { 
                 currentUser: window.bootStrap.currentUser,
                 registrations: window.bootStrap.registrations ,
                 bookmarks: window.bootStrap.bookmarks
                }  
            };
        window.bootStrap = null;
        store = configureStore(preloadedState);
        
    } else {
        store = configureStore();
    }


    
    ReactDOM.render(<Root store={store}/>, root);
});