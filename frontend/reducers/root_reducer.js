import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer.js';
import navbarUIReducer from './navbar_ui_reducer';
import eventReducer from './events/event_reducer.js'
import categoryReducer from './categories/category_reducer';
export default combineReducers({
    events: eventReducer,
    session: sessionReducer,
    errors: errorReducer,
    ui: navbarUIReducer,
    categories: categoryReducer,
});