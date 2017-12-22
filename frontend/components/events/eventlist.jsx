import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import EventListItem from './event_list_item.jsx';
import SearchBar from '../searchbar/searchbarContainer'
// import {SelectEventsInOrder} from '../../reducers/selectors/selectors.js';
// import * as Sorts from '../../reducers/selectors/sorts';


class EventList extends React.Component{
    constructor(props){
        super(props);
        this.registrationHandler = this.registrationHandler.bind(this);
        this.bookmarkHandler = this.bookmarkHandler.bind(this);
    }
    bookmarkHandler(event) {
        const redirect = (e) => {
            e.preventDefault();
            this.props.history.push('/signup');
        };
        if (this.props.loggedIn) {

            const handleUnbookmark = (e) => {
                e.preventDefault();
                this.props.deleteBookmark(event.id);
            };
            const handleBookmark = (e) => {
                e.preventDefault();
                this.props.createBookmark(event.id);
            };
            let BookmarkHandler = event.bookmarked ? handleUnbookmark : handleBookmark;

            return (BookmarkHandler.bind(this));
        }
        return redirect;
    }
    registrationHandler(event) {
        const redirect = (e) => {
            e.preventDefault();
            this.props.history.push('/signup');
        };
        if (this.props.loggedIn ){
            const handleUnregister = (e)=>{
                e.preventDefault();
                this.props.deleteRegistration(event.id) ;
            };
            const handleRegister = (e)=> {
                e.preventDefault();
                this.props.makeRegistration(event.id, this.props.currentUser);
            };

            let registrationhandler = event.registered ? handleUnregister : handleRegister;

            return (registrationhandler.bind(this));
        }
        return redirect;
    }
    componentDidMount() {
    }
    render(){
        return(
            <main className='eventlist'>
                <div className='navbar-img-container'>
                <div className='splashlogo'>
                        <h2> Make memories, find friends</h2>
                        <h1> FlyaKite</h1>
                        <SearchBar/>
                        </div>
                </div>
                <div className="indexbar">

                
                </div> 
                <div className="eventList-container">
                    <div className="eventListItem-container"> 
                        <ul className='event-list-ul'>
                            {this.props.eventsList.map ( (event, index) => (                        
                                <div key={`eventlistitemdiv-${event.id}`} className='event-item-anchor'>                                    
                                    <EventListItem
                                        key={`eventlistitem-${event.id}`}
                                        event={event}
                                        registered={event.registered}
                                        bookmarked={event.bookmarked}
                                        bookmarkHandler={this.bookmarkHandler(event)}
                                        registrationHandler={this.registrationHandler(event)}
                                      />
                                </div>
                            )
                        )}
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

export default EventList;