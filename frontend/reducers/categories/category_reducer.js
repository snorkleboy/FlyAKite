import {
    RECEIVE_CATEGORIES
} from '../../actions/category_actions';


import merge from 'lodash/merge';

const _categories = {
    "byIDs": {},
    "order": [],
};
export default (state = _categories, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const newstate = merge({}, state, action.payload);
            return newstate;
        default:
            return state;
    }
};

