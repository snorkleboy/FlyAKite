import { connect } from 'react-redux';
import CreateEventComp from './create_event';

import { CreateEvent} from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) => ({
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createEvent: (event) => dispatch(CreateEvent(event))
});

export default connect(mapStatetoProps, mapDispatchToProps)(CreateEventComp);