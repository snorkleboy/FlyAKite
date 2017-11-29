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
        
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.event === null) {
            this.props.getEvent(this.props.match.params.eventId);
        }

    
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
            return (this.props.registered ? <button onClick={this.handleUnregister}>unregister</button> : <button onClick={this.handleRegister}>register</button>);
        }
    }
    conditionalEdit(){
        return (this.props.currentUsersEvent ? <Link to={this.props.match.url + '/edit'} className='edit-event-link'>EDIT</Link> : null);
    }


    handleUnbookmark(e) {
        e.preventDefault();
        this.props.deleteBookmark(this.props.event.id);
    }
    handleBookmark(e) {
        e.preventDefault();
        this.props.createBookmark(this.props.match.params.eventId);
    }
    conditionalBookmark(){
        if( this.props.currentUser){
            return (this.props.bookmarked ? <button onClick={this.handleUnbookmark}>unbookmark</button> : <button onClick={this.handleBookmark}>bookmark</button>)
        }
        
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
                            <ShowPageComponents.EventImage image={this.props.event.imgURL} /> <ShowPageComponents.EventHeader header={this.props.event.header}/>

                        </div>  
                        <div className='buttonsStrip'>
                        {this.conditionalEdit()}   {this.conditionalRegister()} {this.conditionalBookmark()}

                        </div>
                        <div>
                            <ShowPageComponents.EventDiscription description={this.props.event.description}/>
                        </div>


                    </main>
            );
        }else { return null;}
    
    }
// <img className='showpageImage' src={this.props.event.imgURL} /> 
    // 
    // setBackground(props){
    //     if(props.event !== null) {
    //         console.log("event not null");
    //         const background = document.getElementById('showpageImage');
    //         console.log(background);
    //         background.style.backgroundImage = `url(${props.event.imgURL})`;
    //     }
    // }

    // const img = document.createElement("p");
    // const background = document.getElementById('showpageImage-target');

    // background.style.backgroundImage = `url(${this.props.event.imgURL})`;
    // background.classList.add('showpageImage');
    // img.appendChild(background);

}

export default ShowPage;