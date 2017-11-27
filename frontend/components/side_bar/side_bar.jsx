import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {

        if (!this.props.events.indexLoaded) this.props.getIndex();

    }
    render(){
            return(
            <main className='sideBar'>
                <div>
                    <h1>sidebar</h1>
                </div>
            </main>
        );
    }
}

export default SideBar;
