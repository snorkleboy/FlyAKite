import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import EventListItem from './event_list_item.jsx';
// import {SelectEventsInOrder} from '../../reducers/selectors/selectors.js';
// import * as Sorts from '../../reducers/selectors/sorts';


class EventList extends React.Component{
    constructor(props){
        super(props);
        this.registrationHandler = this.registrationHandler.bind(this);
        this.bookmarkHandler = this.bookmarkHandler.bind(this);
    }


    // conditionalBookmark() {
    //     if (this.props.currentUser) {
    //         return (this.props.bookmarked ? <button onClick={this.handleUnbookmark}>unbookmark</button> : <button onClick={this.handleBookmark}>bookmark</button>)
    //     }

    // }

    bookmarkHandler(id) {
        const redirect = (e) => {
            e.preventDefault();
            this.props.history.push('/signup');
        };
        if (this.props.loggedIn) {

            const handleUnbookmark = (e) => {
                e.preventDefault();
                this.props.deleteBookmark(id);
            };

            const handleBookmark = (e) => {
                e.preventDefault();
                this.props.createBookmark(id);
            };

            let BookmarkHandler = this.props.BookmarkedEventIds.includes(id) ? handleUnbookmark : handleBookmark;

            return (BookmarkHandler.bind(this));
        }
        return redirect;
    }









    registrationHandler(id) {
        // console.log(id, this.props);
        const redirect = (e) => {
            e.preventDefault();
            this.props.history.push('/signup');
        };
        if (this.props.loggedIn ){

            const handleUnregister = (e)=>{
                e.preventDefault();
                this.props.deleteRegistration(id) ;
            };

            const handleRegister = (e)=> {
                e.preventDefault();
                this.props.makeRegistration(id, this.props.currentUser);
            };

            let registrationhandler = this.props.RegisteredEventIds.includes(id) ? handleUnregister : handleRegister;

            return (registrationhandler.bind(this));
        }
        return redirect;
    }

    componentDidMount() {
        if (!this.props.indexLoaded) this.props.GetAllEvents(); 
    }

    componentWillReceiveProps(nextProps) {
        // if (this.props.sortType !== nextProps.sortType){
        // }

    }


    render(){

        // {/* <img className='navbar-img'
        //                 alt='woopsie doopsie' /> */}
        
        return(
            <main className='eventlist'>
                <div className='navbar-img-container'>

                </div>
                <div className="indexbar">

                
                </div> 
                <div className="eventList-container">
                    <div className="eventListItem-container"> 
                        <ul className='event-list-ul'>
                            {this.props.eventsList.map ( (event, index) => {
                                let registered = this.props.RegisteredEventIds.includes(event.id);
                                let bookmarked = this.props.BookmarkedEventIds.includes(event.id);
                            return(
                        
                                <div key={`eventlistitemdiv-${event.id}`} className='event-item-anchor'>
                                    
                                    <EventListItem
                                        key={`eventlistitem-${index}`}
                                        event={event}
                                        registered={registered}
                                        bookmarked={bookmarked}
                                        bookmarkHandler={this.bookmarkHandler(event.id)}
                                        registrationHandler={this.registrationHandler(event.id)}
                                      />
                    
                                </div>

                            );}
                        )}
                        </ul>
                    </div>
                </div>
            </main>
        );
    }


}

// let registrationHandler = this.props.RegisteredEventIds.includes(event.id) ? this.handleUnregister : this.handleRegister;
// console.log("event", registrationHandler, "event", event)
/* <h1>Find Your Next experience</h1>
    <h1>{this.props.formType}</h1> */
export default EventList;