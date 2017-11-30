import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';

// t.integer "userId", null: false

// t.string "name", null: false
// t.datetime "startDate", null: false
// t.datetime "endDate"
// t.text "header", null: false
// t.text "description", null: false
// t.text "imgURL", null: false
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.string "city"
// t.integer "areaCode", null: false
// t.string "state"
// t.integer "categoryId", null: false
// t.index["userId"], name: "index_events_on_userId"
class ShowPage extends React.Component {

    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.conditionalRegister = this.conditionalRegister.bind(this);
        this.handleUnregister = this.handleUnregister.bind(this);

        this.conditionalBookmark = this.conditionalBookmark.bind(this);
        this.handleUnbookmark = this.handleUnbookmark.bind(this);
        this.handleBookmark = this.handleBookmark.bind(this);
        this.redirect = this.redirect.bind(this);
        
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.event === null) {
            this.props.getEvent(this.props.match.params.eventId);
        }

    
    }
    redirect(e){
        e.preventDefault();
        this.props.history.push('/signup');
    }
    handleUnregister(e){
        e.preventDefault();
        this.props.deleteRegistration(this.props.event.id);
    }
    handleRegister(e){
        e.preventDefault();
        this.props.makeRegistration(this.props.match.params.eventId, this.props.currentUser);
    }

    conditionalRegister(){
        if (this.props.currentUser){
            return (this.props.registered ? 
                <button className="unregister-button" onClick={this.handleUnregister}>unregister</button> 
            :
                <button className="register-button" onClick={this.handleRegister}>register</button>);
        }
        return (<button className="register-button" onClick={this.redirect}>register</button>)
        
    }

    conditionalEdit(){
        return (this.props.currentUsersEvent ?
                <Link to={this.props.match.url + '/edit'} className='edit-event-link'>EDIT</Link> 
            :
                 null
            );
    }

    conditionalBookmark() {
        if (this.props.currentUser) {
            return (this.props.bookmarked ?
                <button className="unbookmark-button" onClick={this.handleUnbookmark}>unbookmark</button> 
            : 
                <button className="bookmark-button" onClick={this.handleBookmark}>bookmark</button>
            );
        }
        return (<button className="register-button" onClick={this.redirect}>Bookmark</button>);

    }

    handleUnbookmark(e) {
        e.preventDefault();
        this.props.deleteBookmark(this.props.event.id);
    }
    handleBookmark(e) {
        e.preventDefault();
        this.props.createBookmark(this.props.match.params.eventId);
    }

    componentWillReceiveProps(newProps){
        // console.log("showpage recieveing props", newProps);
    }
    
    render() {
        if (this.props.event !== null){
            return (

                    <main  className='showpage'>
                        <div className='showpageImage' style={{ backgroundImage: `url(${this.props.event.imgURL})` }}>
                            
                        </div>
                        <div className='imgheader'>
                            <ShowPageComponents.EventImage image={this.props.event.imgURL} /> <ShowPageComponents.EventHeader name={this.props.event.name} header={this.props.event.header}/>

                        </div>  
                        <div className='buttonsStrip'>
                        {this.conditionalEdit()}   {this.conditionalRegister()} {this.conditionalBookmark()}

                        </div>
                        <div>
                            <ShowPageComponents.EventDiscription event={this.props.event}/>
                        </div>


                    </main>
            );
        }else { return null;}
    
    }
}

export default ShowPage;