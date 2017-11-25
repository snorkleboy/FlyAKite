import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';

class ShowPage extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
 
    }
    componentDidMount() {
        console.log("didmount")
        console.log(this.props)
        console.log("--")
        if (this.props.event === null) {
            this.props.getEvent(this.props.match.params.eventId);
        }
    }

    componentWillReceiveProps(newProps)
    {

    }
    render() {
        console.log(this.props.event);
        if (this.props.event !== null){
            return (
                <div className='wrapper'>
                test
                    <main> 
                        <h1> sidebar</h1>
                    </main>
                    <main>
                        <div>
                            <ShowPageComponents.EventImage image={this.props.event.imgURL} /> <ShowPageComponents.EventHeader header={this.props.event.header}/>

                        </div>
                        <div>
                            <ShowPageComponents.EventDiscription description={this.props.event.description}/>
                        </div>


                    </main>;
                </div>
            );
        }else { return null;}
    
    }





}

export default ShowPage;