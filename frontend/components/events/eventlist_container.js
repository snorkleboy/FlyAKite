import { connect } from 'react-redux';
import React from 'react';

import * as EventActions from '../../actions/event_actions';
import Eventlist from './eventlist';
import { GetAllEvents } from '../../actions/event_actions';
import { getIndex, getIndexDiff} from '../../actions/category_actions';
import * as Sorts from '../../reducers/selectors/sorts';

import { sortEvents} from '../../actions/sort_actions';
//i need to get this to check props and either pass down all events or a subset depending on the path

const mapStateToProps = (state, ownProps) => {
    console.log("eventlist container");
    console.log(state);
    console.log(ownProps);
        return ({
        events: state.events,
        categories: state.categories,
        // sortType: state.events.sortType
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    GetAllEvents: (eventList) => dispatch(GetAllEvents(eventList)),
    // sortEvents: () => dispatch(sortEvents())
    // getIndex: () => dispatch(getIndex()),
    // getIndexDiff: (lists) => dispatch(getIndexDiff(lists))
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);