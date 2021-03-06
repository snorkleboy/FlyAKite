import { connect } from 'react-redux';
import CreateEventComp from './create_event';

import { CreateEvent, clearEventErrors, UpdateEvent, GetEvent } from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) => {
    let type = 'create';
    let event = _nullEvent;
    

    if (ownProps.match.path === '/events/:eventId/edit'){
        type =  "edit";
        if (state.events.byIDs[ownProps.match.params.eventId]){
            event = state.events.byIDs[ownProps.match.params.eventId];
        }else {
            event = _nullEvent;
        }
    }
    event.userId = state.session.currentUser.id;

    return ({
        errors: state.errors.events,
        userId: state.session.currentUser.id,
        formType: type,
        event: event,
        categories: state.categories
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    const actionType = ownProps.match.path === '/create' ?
        CreateEvent
    :
        UpdateEvent
    ;

    return(
        {
            GetEvent: (id) => dispatch(GetEvent(id)),
            actionType: (event, callback) => dispatch(actionType(event, callback)),
            clearEventErrors: () => dispatch(clearEventErrors()),
        }
    );

};

export default connect(mapStatetoProps, mapDispatchToProps)(CreateEventComp);
// yyyy - MM - ddThh: mm


var _nullEvent;
if (process.env.NODE_ENV === 'production') {
    _nullEvent = {
        // userId: this.props.userId,
        location: {
            areaCode: "94016",
            state: "CA",
            city: "San Fransisco",
        },
        categoryId: 1,
        name: '',
        startDate: new Date().toISOString().slice(0, 16),
        header: "",
        description: "",
        imgURL: "",
        endDate: "",
        price: '0',
        stripeKey: ""
    };
}else{
    _nullEvent = {
        // userId: this.props.userId,
        location: {
            areaCode: "94016",
            state: "CA",
            city: "San Fransisco",
        },
        categoryId: 1,
        name: 'NULLNAME',
        startDate: new Date().toISOString().slice(0, 16),
        header: "sdfsdfdfsdsfdf",
        description: "dfsdfsdvsdvsd",
        imgURL: "www.testurdfgl.com",
        endDate: new Date().toISOString().slice(0, 16),
        price: '0',
        stripeKey: ""
    };
}

