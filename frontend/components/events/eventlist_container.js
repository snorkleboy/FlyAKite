import { connect } from 'react-redux';
import React from 'react';

import * as EventActions from '../../actions/event_actions';
import Eventlist from './eventlist';
import { GetAllEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
    events: state.events
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    GetAllEvents: () => dispatch(GetAllEvents())
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);