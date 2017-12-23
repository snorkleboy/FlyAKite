import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { SelectEntityInOrder} from '../../reducers/selectors/selectors';
class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.newHandle = this.newHandle.bind(this);
    }
    componentDidMount(){
        if (!this.props.categories.indexLoaded) this.props.getAllCatgories();
        const param = parseInt(this.props.location.pathname[1])
        if (this.props.match.isExact) {
            this.props.GetAllEvents();
        } else if (!Number.isNaN(param)){
            this.props.GetEventsbyCategory(param);
        } else if (this.props.location.pathname === '/bookmarked'){
            this.props.GetBookmarked();
        } else if (this.props.location.pathname === '/registered'){
            this.props.GetRegistered();
        } else if (this.props.location.pathname === '/MyEvents'){
            this.props.GetMyEvents();
        } else if (this.props.location.pathname === '/Recent') {
            this.props.GetRecent();
        } else if (this.props.location.pathname === '/GetUpcoming') {
            this.props.GetUpcoming();
        }
        console.log("this", this);



    } 
    componentWillReceiveProps(props){
        if (this.props.match.isExact) {
            this.props.GetAllEvents();
        }
    }

    newHandle(id){
        return (e) => {
            this.props.GetEventsbyCategory(id);
        };
    }
    
    render(){

        const cats = (SelectEntityInOrder(this.props.categories));
        let ProfileOptions = ()=>null;
        if (this.props.loggedIn){
            ProfileOptions = () =>(
                <div className='profile-buttons'>
                    <NavLink key='329487293847' 
                        className='profile-sidebar sidebar-button' 
                        activeClassName="sidebar-button-active" 
                        to='/bookmarked'
                        onClick={this.props.GetBookmarked}
                    >BOOKMARKED </NavLink> 


                    <NavLink key='5432' 
                        className='profile-sidebar sidebar-button' 
                        activeClassName="sidebar-button-active" 
                        to='/registered'
                        onClick={this.props.GetRegistered}
                    >REGISTERED </NavLink>

                    <NavLink key='6543214' 
                        className='profile-sidebar sidebar-button' 
                        activeClassName="sidebar-button-active" 
                        to='/MyEvents'
                        onClick={this.props.GetMyEvents}
                    >MY EVENTS </NavLink>
                </div>

            );}
        
            return(
                <main id='category-holder' className='sideBar'>
                        <div  id='this' className='SideBar-buttons-list'>
                        {ProfileOptions()}
                        <NavLink key='45643'
                            activeClassName="sidebar-button-active"
                            className='sidebar-button'
                            to='/Recent'
                            onClick={this.props.GetRecent}
                        >RECENT </NavLink>

                        <NavLink key='23434'
                            activeClassName="sidebar-button-active"
                            className='sidebar-button'
                            to='/GetUpcoming'
                            onClick={this.props.GetUpcoming}
                        >UPCOMING </NavLink>
                        {
                            cats.map((category, i) => <NavLink activeClassName="sidebar-button-active" 
                                                    className='sidebar-button' 
                                                    to={`/${category.id}`} 
                                                    key={`${category.id}side-bar-button`}
                                                    onClick={this.newHandle(category.id)}
                                                    exact={true}
                                                    >
                                                    {category.name} 
                                                    </NavLink> )
                        }
                    </div>
                </main>
        );
    }
}

export default SideBar;
