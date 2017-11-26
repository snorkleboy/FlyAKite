import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';

class ShowPage extends React.Component {

    constructor(props){
        super(props);
        console.log(props);

 
    }
    componentDidMount() {
        if (this.props.event === null) {
            this.props.getEvent(this.props.match.params.eventId);
        }

    
    }


    render() {
        
        console.log(this.props.event);
        if (this.props.event !== null){
            return (
                <div className='wrapper'>
                    <main className='sideBar'> 
                        <div>
                            <h1>sidebar</h1>
                        </div>
                    </main>
                    <main className='showpage'>
                        <div className='showpageImage' id='showpageImage'>
                        </div>
                        <div className='imgheader'>
                            <ShowPageComponents.EventImage image={this.props.event.imgURL} /> <ShowPageComponents.EventHeader header={this.props.event.header}/>

                        </div>
                        <div>
                            <ShowPageComponents.EventDiscription description={this.props.event.description}/>
                        </div>


                    </main>
                </div>
            );
        }else { return null;}
    
    }


    setBackground(props){
        if(props.event !== null) {
            console.log("event not null")
            const background = document.getElementById('showpageImage');
            console.log(background)
            background.style.backgroundImage = `url(${props.event.imgURL})`;
        }
    }

}

export default ShowPage;