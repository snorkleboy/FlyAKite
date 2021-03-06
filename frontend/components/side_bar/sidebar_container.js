import { connect } from 'react-redux';
import SideBar from './side_bar';
import { getAllCatgories } from '../../actions/category_actions';
// import {}
import { Link, withRouter } from 'react-router-dom';
import { setSort } from '../../actions/sort_actions';
import {
    GetAllEvents,
    GetEventsbyCategory,
    GetBookmarked,
    GetRegistered,
    GetMyEvents,
    GetRecent,
    GetUpcoming

} from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) => {
    return ({
        categories: state.categories,
        loggedIn: state.session.currentUser
    });
};
const mapDispatchtoProps = (dispatch, ownProps) => ({
    getAllCatgories: () => dispatch(getAllCatgories()),
    setSort: (type) => dispatch(setSort(type)),
    GetAllEvents: (eventList) => dispatch(GetAllEvents(eventList)),
    GetEventsbyCategory: (id) => dispatch(GetEventsbyCategory(id)),
    GetBookmarked: () => dispatch(GetBookmarked()),
    GetRegistered: () => dispatch(GetRegistered()),
    GetMyEvents: () => dispatch(GetMyEvents()),
    GetRecent: () => dispatch(GetRecent()),
    GetUpcoming: () => dispatch(GetUpcoming())
});

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(SideBar));