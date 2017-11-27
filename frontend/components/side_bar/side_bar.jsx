import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component{
    constructor(props){
        super(props);
    }
    conditionalEdit() {
        return (this.props.currentUsersEvent ? <Link to={this.props.match.url + '/edit'} className='edit-event-link'>EDIT</Link> : null);
    }
    render(){
            return(
            <main className='sideBar'>
                <div>
                    <h1>sidebar</h1>
                    {this.conditionalEdit()}
                </div>
            </main>
        );
    }
}
