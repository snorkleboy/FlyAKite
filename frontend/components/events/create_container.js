import { connect } from 'react-redux';
import CreateEventComp from './create_event';

import { CreateEvent, clearEventErrors} from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) => ({
    errors: state.errors.events,

    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createEvent: (event) => dispatch(CreateEvent(event)),
    clearEventErrors: () => dispatch(clearEventErrors())
});

export default connect(mapStatetoProps, mapDispatchToProps)(CreateEventComp);