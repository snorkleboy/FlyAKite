import { connect } from 'react-redux';
import React from 'react';

import * as EventActions from '../../actions/event_actions';
import Eventlist from './eventlist';
import { receiveAllEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
    events: state.events
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveAllEvents: ()=> dispatch(receiveAllEvents())
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);