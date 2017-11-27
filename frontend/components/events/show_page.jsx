import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';

class ShowPage extends React.Component {

    constructor(props){
        super(props);
        console.log(props);

 
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.event === null) {
            this.props.getEvent(this.props.match.params.eventId);
        }

    
    }
    conditionalEdit(){
        return (this.props.currentUsersEvent ? <Link to={this.props.match.url + '/edit'} className='edit-event-link'>EDIT</Link> : null);
    }
    
    render() {
        
        console.log(this.props);
        if (this.props.event !== null){
            return (
                <div className='wrapper'>
                    <main className='sideBar'> 
                        <div>
                            <h1>sidebar</h1>
                            {this.conditionalEdit()}
                        </div>
                    </main>
                    <main  className='showpage'>
                        <div className='showpageImage' style={{backgroundImage: `url(${this.props.event.imgURL})`}}>
                        </div>
                        <div className='imgheader'>
                            <ShowPageComponents.EventImage image={this.props.event.imgURL} /> <ShowPageComponents.EventHeader header={this.props.event.header}/>

                        </div>  
                        <div className='buttonsStrip'>
                            <h1>&X &X &X</h1>
                            <div>{this.conditionalEdit()}</div> 

                        </div>
                        <div>
                            <ShowPageComponents.EventDiscription description={this.props.event.description}/>
                        </div>


                    </main>
                </div>
            );
        }else { return null;}
    
    }


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