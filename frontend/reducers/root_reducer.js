import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer.js';
import navbarUIReducer from './navbar_ui_reducer';

export default combineReducers({
    session: sessionReducer,
    errors: errorReducer,
    ui: navbarUIReducer
});