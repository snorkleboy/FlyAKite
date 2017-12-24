import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';
import setCloudinaryOptions from '../../util/cloudinaryOptionsSetter';

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
        this.handleDelete = this.handleDelete.bind(this);
        
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
    handleDelete(id){
        return function (e){
            this.props.deleteEventCall(id);
            this.props.history.push('/')
        }
    }
    conditionalRegister(){
        if (this.props.currentUser){
            return (this.props.event.registered ? 
                <button className="unregister-button" onClick={this.handleUnregister}>REGISTERED</button> 
            :
                <button className="register-button" onClick={this.handleRegister}>REGISTER</button>);
        }
        return (<button className="register-button" onClick={this.redirect}>REGISTER</button>)
        
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
            return (this.props.event.bookmarked ?
                <button className="unbookmark-button" onClick={this.handleUnbookmark}>BOOKMARKED</button> 
            : 
                <button className="bookmark-button" onClick={this.handleBookmark}>BOOKMARK</button>
            );
        }
        return (<button className="register-button" onClick={this.redirect}>Bookmark</button>);

    }
    conditionalDelete(){
        let button = null;
        if (this.props.event.currentUsersEvent){
            button = <button onClick={this.handleDelete(this.props.event.id).bind(this)}>DELETE</button>;
        }
        return button;
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

    }

    render() {
        if (this.props.event !== null){
            const cloudinaryImageUrl = setCloudinaryOptions(this.props.event.imgURL, 'q_60,w_600,h_700,c_fit');
            return (

                    <main  className='showpage'>
                        <div className='showpageImage'>
                        <img src={setCloudinaryOptions(this.props.event.imgURL, 'q_20')}/>
                        </div>
                        <div className='imgheader'>

                        <ShowPageComponents.EventImage image={cloudinaryImageUrl} /> <ShowPageComponents.EventHeader location={this.props.event.location} name={this.props.event.name} date={this.props.event.startDate} header={this.props.event.header}/>

                        </div>  
                        <div className='buttonsStrip'>
                        {this.conditionalEdit()}   {this.conditionalRegister()} {this.conditionalBookmark()} {this.conditionalDelete()}

                        </div>
                        <div>
                            <ShowPageComponents.EventDiscription event={this.props.event}/>
                            
                        </div>


                    </main>
            );
        }else { return null;}
    
    }
}
{/* <div style={{ backgroundImage: `url(${this.props.event.imgURL})` }}></div> */}
export default ShowPage;

// 