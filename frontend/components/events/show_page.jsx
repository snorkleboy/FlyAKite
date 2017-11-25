import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';

class ShowPage extends React.Component {

    constructor(props){
        super(props);
 
    }
    componentDidMount() {
        if (!event) {
            console.log(this.props.getEvent);
            this.props.getEvent(this.props.match.params.eventId);
        }
    }
    render() {
        // console.log(this.props);
        return (
            <main>
                <div>
                    <ShowPageComponents.EventImage/> <ShowPageComponents.EventHeader/>

                </div>
                <div>
                    <ShowPageComponents.EventDiscription/>
                </div>


                event
            {this.props.event ? this.props.event.name : null}
            </main>);
    }





}

export default ShowPage;