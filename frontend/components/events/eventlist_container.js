import { connect } from 'react-redux';
import React from 'react';
//actions
import * as EventActions from '../../actions/event_actions';
import Eventlist from './eventlist';
import { GetAllEvents } from '../../actions/event_actions';
import { getIndex, getIndexDiff} from '../../actions/category_actions';
import { sortEvents } from '../../actions/sort_actions';
import { makeRegistration,deleteRegistration} from '../../actions/registration_actions';
import { createBookmark, deleteBookmark} from '../../actions/bookmark_actions';
//selectors
import * as Selectors from '../../reducers/selectors/selectors';





const mapStateToProps = (state, ownProps) => {

        return ({
        eventsList: Object.values(state.events.byIDs),
        loggedIn: state.session.currentUser
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    
    makeRegistration: (eventId, userId) => dispatch(makeRegistration(eventId, userId)),
    deleteRegistration: (eventId) => dispatch(deleteRegistration(eventId)),
    createBookmark: (eventId) => dispatch(createBookmark(eventId)),
    deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId))

});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);