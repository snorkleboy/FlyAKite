import { Link, withRouter, NavLink } from 'react-router-dom';
import { SelectEntityInOrder } from '../../reducers/selectors/selectors';
import * as EventActions from '../../actions/event_actions';
import { connect } from 'react-redux';
import React from 'react';
import { GetAllEvents } from '../../actions/event_actions';
import SearchBar from './searchbar';
export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: (pattern, catId) => dispatch(EventActions.Search(pattern, catId))
    }
}

export const mapStateToProps = (state, ownProps) => {
    return {
        categories:Object.values(state.categories.byIDs)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
