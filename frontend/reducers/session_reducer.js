import merge from 'lodash/merge';

const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (state = {}, action) =>{
    switch(action.tyep){
        default:
            return state;
    }
};

export default sessionReducer;