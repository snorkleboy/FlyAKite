import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';

class ShowPage extends React.Component {

    constructor(props){
        super(props);
        console.log("show props", props);
        this.handleRegister = this.handleRegister.bind(this);
        this.conditionalRegister = this.conditionalRegister.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.event === null) {
            this.props.getEvent(this.props.match.params.eventId);
        }

    
    }

    handleRegister(e){
        e.preventDefault();
        console.log("handle register", this.props.currentUser, this.props.match.params.eventId );
        this.props.makeRegistration(this.props.match.params.eventId, this.props.currentUser);
    }
    conditionalRegister(){
        console.log("registered", this.props);
        if (this.props.currentUser){
            return (this.props.registered  ? <button >unregister</button> : <button onClick={this.handleRegister}>register</button>);
        }
    }
    conditionalEdit(){
        return (this.props.currentUsersEvent ? <Link to={this.props.match.url + '/edit'} className='edit-event-link'>EDIT</Link> : null);
    }
    componentWillReceiveProps(newProps){
        console.log("newprops", newProps);
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
                            &X &X &X{this.conditionalEdit()}{this.conditionalRegister()}

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