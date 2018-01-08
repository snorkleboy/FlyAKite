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
                //  registrations: window.bootStrap.registrations ,
                //  bookmarks: window.bootStrap.bookmarks
                }  
            };
        window.bootStrap = null;
        store = configureStore(preloadedState);
        
    } else {
        store = configureStore();
    }


    
    ReactDOM.render(<Root store={store}/>, root);
});

console.log(`
 _____  _            _____  _  _        
|   __|| | _ _  ___ |  |  ||_|| |_  ___ 
|   __|| || | || .'||    -|| ||  _|| -_|
|__|   |_||_  ||__,||__|__||_||_|  |___|
          |___|                         

`)


console.log(`
 _____       _                  _____  _                   _             
|  _  | ___ | |_  ___  _____   |  |  || |_  ___  ___  ___ | |_  ___  ___ 
|     ||  _||  _|| -_||     |  |    -||   || .'||  _||_ -||   || .'||   |
|__|__||_|  |_|  |___||_|_|_|  |__|__||_|_||__,||_|  |___||_|_||__,||_|_|

TimKharshan@hotmail.com
https://www.linkedin.com/in/artem-kharshan/                                         
`)                                                       
