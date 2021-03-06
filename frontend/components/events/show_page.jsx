import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';
import setCloudinaryOptions from '../../util/cloudinaryOptionsSetter';
import RegistrationModal from './registration_modal';
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
        this.state = {registrationOpen: false};
        
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.event === null) {
            this.props.getEvent(this.props.match.params.eventId);
        }
    }
    redirect(e){
        const location = {
            pathname: '/signup',
            state: { redirectedFrom : this.props.location.pathname }
        }
        this.props.history.push(location);
    }
    handleUnregister(e){
        this.props.deleteRegistration(this.props.event.id);
    }
    handleRegister(e){
        this.props.makeRegistration(this.props.match.params.eventId, this.props.currentUser).then((success)=> this.closeRegistration());
    }
    handleStripeRegistration(token,args){
        this.props.makeRegistration(
            this.props.match.params.eventId,
            this.props.currentUser,
            token
           ).then(success => this.closeRegistration());
    }
    openRegistration(e){
        this.setState({ registrationOpen:true});
    }
    closeRegistration(e){
        this.setState({registrationOpen: false});
    }
    handleDelete(id){
        return function (e){
            this.props.deleteEventCall(id);
            this.props.history.push('/Upcoming');
        };
    }
    conditionalRegister(){
        if (this.props.currentUser){
            return (this.props.event.registered ? 
                <button className="unregister-button" onClick={this.handleUnregister.bind(this)}>REGISTERED</button> 
            :
                this.props.event.price>0 ?
                    <button className="register-button" onClick={this.openRegistration.bind(this)}>REGISTER</button>
                : 
                    <button className="register-button" onClick={this.handleRegister} >FREE REGISTRATION </button>
            );
        }
        return (<button className="register-button" onClick={this.redirect}>REGISTER</button>);   
    }
    conditionalEdit(){
        return (this.props.currentUsersEvent ?
                <Link to={this.props.match.url + '/edit'} className='edit-event-link'>EDIT</Link> 
            :
                 null
            );
    }
    conditionalBookmark() {
        const bookmarked = this.props.event.bookmarked;
        if (this.props.currentUser) {
            return (bookmarked ?
                <button className="unbookmark-button floatbutton" onClick={this.handleUnbookmark}><i className={"fa fa-bookmark" + (!bookmarked ? '-o' : '')}></i></button> 
            : 
                <button className="bookmark-button floatbutton" onClick={this.handleBookmark}><i className={"fa fa-bookmark" + (!bookmarked ? '-o' : '')}></i></button>
            );
        }
        return (<button className="bookmark-button floatbutton" onClick={this.redirect}><i className={"fa fa-bookmark" + (!bookmarked ? '-o' : '')}></i></button>);
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
    render() {
        if (this.props.event !== null){
            const cloudinaryImageUrl = setCloudinaryOptions(this.props.event.imgURL, 'q_60');
            return <main className="showpage">
                {
                    this.state.registrationOpen ? 
                        <RegistrationModal 
                            close={this.closeRegistration.bind(this)} 
                            register={this.handleStripeRegistration.bind(this)} 
                            event={this.props.event} 
                        />
                    :
                        null
                }
                <div className="showpageImage">
                  <img src={setCloudinaryOptions(this.props.event.imgURL, "q_60")} />
                </div>
                <div className="imgheader">
                  <ShowPageComponents.EventImage image={cloudinaryImageUrl} />
                  <ShowPageComponents.EventHeader location={this.props.event.location} name={this.props.event.name} date={this.props.event.startDate} header={this.props.event.header} />
                  <div>{this.conditionalBookmark()}</div>
                </div>

                <div className="buttonsStrip">
                  {this.conditionalEdit()}
                  {this.props.event.price > 0 ? `$${this.props.event.price / 100}` : "free"}
                  {this.conditionalRegister()}
                  {this.conditionalDelete()}
                </div>
                <div>
                  <ShowPageComponents.EventDiscription event={this.props.event} />
                </div>
              </main>;
        }else { return null;}
    
    }
}
export default ShowPage;

//                         
