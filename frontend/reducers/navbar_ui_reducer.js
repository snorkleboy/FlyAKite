import {
    TOGGLE_LOGIN_FORM,
    TOGGLE_PROFILE,
    CLOSE_ALL,
    REDIRECT,
    UNREDIRECT
} from '../actions/navbar_ui_actions';

import merge from 'lodash/merge';



const _default = {
    showLogin: false,
    showProfile:false,
    redirectFrom:null
};

export default (state = _default, action) => {
    Object.freeze(state);
    let newState = merge({},state);
    switch (action.type) {        
        case TOGGLE_LOGIN_FORM:
            newState.showLogin = !newState.showLogin;
            return newState;
        case TOGGLE_PROFILE:
            newState.showProfile = !newState.showProfile;
            return newState;
        case CLOSE_ALL:
            newState.showLogin = false;
            newState.showProfile = false;
            return newState;
        case REDIRECT:
            newState.redirectFrom = action.payload;
            return newState;
        case UNREDIRECT:
            newState.redirectFrom = null;
            return newState;
        default:
            return state;
    }
};