import * as SessionAPI from '../util/sessionAPI';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const clearSessionErrors = ()=>({
    type: CLEAR_SESSION_ERRORS
});

export const receiveCurrentUser = (currentUser) =>({
    type: RECEIVE_CURRENT_USER,
    payload: currentUser
});

export const receiveErrors = (errorArray) => ({
    type: RECEIVE_SESSION_ERRORS,
    payload: errorArray.responseText
});

//thunk //thunk
export const login = (user) => dispatch => SessionAPI.login(user)
.then(
    (success)=> dispatch(receiveCurrentUser(success)),
    ((failure)=> dispatch(receiveErrors(failure)))
    );
const _nullUser = Object.freeze({
    currentUser: null,
    registrations: [],
    bookmarks:[]
});
export const logout = (uer) => dispatch => SessionAPI.logout()
    .then(
    (success) => dispatch(receiveCurrentUser(_nullUser)),
    ((failure) => dispatch(receiveErrors(failure)))
    )

export const signup = (user) => dispatch => SessionAPI.signup(user)
    .then(
    (success) => dispatch(receiveCurrentUser(success)),
    ((failure) => dispatch(receiveErrors(failure)))
    )


