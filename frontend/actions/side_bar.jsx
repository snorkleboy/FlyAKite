import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component{
    constructor(props){
        super(props);
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
