import { combineReducers } from 'redux';

import session from './session_error_reducer.js';
import events from './events/event_errors_reducer.js';
export default combineReducers({
    session,
    events
});