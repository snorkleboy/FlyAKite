import { connect } from 'react-redux';
import React from 'react';
//actions
import * as EventActions from '../../actions/event_actions';
import Eventlist from './eventlist';
import { GetAllEvents } from '../../actions/event_actions';
import { getIndex, getIndexDiff} from '../../actions/category_actions';
import { sortEvents } from '../../actions/sort_actions';
import { makeRegistration,deleteRegistration} from '../../actions/registration_actions';
//selectors
import * as Selectors from '../../reducers/selectors/selectors';





const mapStateToProps = (state, ownProps) => {
    let catId = ownProps.match.params.categoryId? parseInt(ownProps.match.params.categoryId) : 0;
    let eventList = Selectors.SelectByCategory(state.events, catId);

        return ({
        eventsList: eventList , 
        indexLoaded: state.events.indexLoaded,
        sortType: state.events.sortType,
        RegisteredEventIds: state.session.registrations,
        loggedIn: state.session.currentUser
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    GetAllEvents: (eventList) => dispatch(GetAllEvents(eventList)),
    makeRegistration: (eventId, userId) => dispatch(makeRegistration(eventId, userId)),
    deleteRegistration: (eventId) => dispatch(deleteRegistration(eventId))

    // sortEvents: () => dispatch(sortEvents())
    // getIndex: () => dispatch(getIndex()),
    // getIndexDiff: (lists) => dispatch(getIndexDiff(lists))
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);