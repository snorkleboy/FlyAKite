import merge from 'lodash/merge';

import {
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION} from '../actions/registration_actions';


const _nullUser = Object.freeze({
    currentUser: null,
    registrations: []
});

const sessionReducer = (state = _nullUser, action) =>{
    Object.freeze(state);
    let newState = merge({}, state);
    switch(action.type){

        case RECEIVE_REGISTRATION:
            newState = merge({}, state);
            // console.log("newState", newState);
            newState.registrations.push(action.payload);
            // console.log("newState", newState);
            return newState;
        case RECEIVE_CURRENT_USER:
            newState = merge({}, state);
        // console.log("sess reducer", state, action.payload);
            newState.currentUser = action.payload.current_user;
            newState.registrations = action.payload.registrations;
            return newState;
        case DELETE_REGISTRATION:
            newState = merge({}, state);
            console.log("DELETE_REGISTRATION", action.payload);
            console.log("newState", newState.registrations);

            const index = newState.registrations.indexOf(action.payload);
            newState.registrations.splice(index, 1);

            console.log("DELETE_REGISTRATION", action.payload);
            console.log("newState", newState);
            console.log("return----");
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;