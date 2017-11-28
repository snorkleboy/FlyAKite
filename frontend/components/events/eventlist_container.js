import { connect } from 'react-redux';
import React from 'react';
//actions
import * as EventActions from '../../actions/event_actions';
import Eventlist from './eventlist';
import { GetAllEvents } from '../../actions/event_actions';
import { getIndex, getIndexDiff} from '../../actions/category_actions';
import { sortEvents } from '../../actions/sort_actions';

//selectors
import * as Selectors from '../../reducers/selectors/selectors';




//i need to get this to check props and either pass down all events or a subset depending on the path

const mapStateToProps = (state, ownProps) => {
    // console.log("eventlist container");
    // console.log(state);     
    // console.log(ownProps);
    let catId = ownProps.match.params.categoryId? parseInt(ownProps.match.params.categoryId) : 0;
    let eventList = Selectors.SelectByCategory(state.events, catId);
    // console.log('catId', catId);
    // console.log("eventlist", eventList);
        return ({
        eventsList: eventList , 
        indexLoaded: state.events.indexLoaded,
        sortType: state.events.sortType
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    GetAllEvents: (eventList) => dispatch(GetAllEvents(eventList)),
    // sortEvents: () => dispatch(sortEvents())
    // getIndex: () => dispatch(getIndex()),
    // getIndexDiff: (lists) => dispatch(getIndexDiff(lists))
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);