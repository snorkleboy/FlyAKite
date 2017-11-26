import { connect } from 'react-redux';
import CreateEventcomp from './create_event';

import {createEvent} from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) => ({
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    CreateEvent:(event) => dispatch(createEvent(event))
});

export default connect(mapStatetoProps, mapDispatchToProps)(CreateEventcomp);