import * as RegActions from '../util/registrationApi';


export const RECEIVE_REGISTRATION = "RECEIVE_REGISTRATION";
export const DELETE_REGISTRATION = 'RECEIVE_REGISTRATION';

export const receiveRegistration = (registration) =>({
    type: RECEIVE_REGISTRATION,
    payload: registration
});


export const makeRegistration = (eventId, userId) => dispatch => RegActions.createRegistration()
    .then((success) => dispatch(receiveRegistration(success)) ); 