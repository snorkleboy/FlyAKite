import { connect } from 'react-redux';
import React from 'react';

import * as EventActions from '../../actions/event_actions';
import Eventlist from './eventlist';
import { GetAllEvents } from '../../actions/event_actions';
import { getIndex, getIndexDiff} from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => ({
    events: state.events,
    categories: state.categories
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    GetAllEvents: (eventList) => dispatch(GetAllEvents(eventList)),
    getIndex: () => dispatch(getIndex()),
    getIndexDiff: (lists) => dispatch(getIndexDiff(lists))
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);