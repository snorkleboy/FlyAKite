import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import EventListItem from './event_list_item.jsx';
// import {SelectEventsInOrder} from '../../reducers/selectors/selectors.js';
// import * as Sorts from '../../reducers/selectors/sorts';


class EventList extends React.Component{
    constructor(props){
        super(props);
        // this.handleRegister = this.handleRegister.bind(this);
        this.registrationHandler = this.registrationHandler.bind(this);
        // this.handleUnregister = this.handleUnregister.bind(this);
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
                this.props.deleteRegistration(id) 
            };

            const handleRegister = (e)=> {
                e.preventDefault();
                this.props.makeRegistration(id, this.props.currentUser) 
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
        if (this.props.sortType !== nextProps.sortType){
        }

    }


    render(){

        // {/* <img className='navbar-img'
        //                 alt='woopsie doopsie' /> */}
        
        return(
            <main className='eventlist'>
                <div className='navbar-img-container'>
    
                </div>
                <div className="eventList-container">
                    <div className="eventListItem-container"> 
                    <h1> {this.props.sortType}</h1>
                        <ul className='event-list-ul'>
                            {this.props.eventsList.map ( (event, index) => {
                                let registered = this.props.RegisteredEventIds.includes(event.id);
                            return(
                        
                                <div key={`eventlistitemdiv-${index}`} className='event-item-anchor'>
                                    <EventListItem key={`eventlistitem-${index}`} event={event} registered={registered} registrationHandler={this.registrationHandler(event.id)}/>
                    
                                </div>

                            )}
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

export default EventList;