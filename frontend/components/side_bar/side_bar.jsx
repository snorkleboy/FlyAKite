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
        this.props.GetAllEvents(); 
    } 

    newHandle(id){
        return (e) => {
            this.props.GetEventsbyCategory(id)
        };
    }
    
    render(){

        const cats = (SelectEntityInOrder(this.props.categories));
        let ProfileOptions = ()=>null;
        if (this.props.loggedIn){
            ProfileOptions = () =>(
                <div className='profile-buttons'>
                    <NavLink key='329487293847' className='profile-sidebar sidebar-button' activeClassName="sidebar-button-active" to='/bookmarked'
                    >BOOKMARKED </NavLink> 

                    <NavLink key='234234234232' className='profile-sidebar sidebar-button' activeClassName="sidebar-button-active" to='/registered'
                    >REGISTERED </NavLink>
                </div>

            );}
        cats.unshift({name:"ALL", id:-1});
        
            return(
                <main id='category-holder' className='sideBar'>
                        <div  className='SideBar-buttons-list'>
                        {ProfileOptions()}
                        {cats.map((category, i) => <NavLink activeClassName="sidebar-button-active" 
                                                    className='sidebar-button' 
                                                    to={`/${category.id}`} 
                                                    key={`${category.id}side-bar-button`}
                                                    onClick={this.newHandle(category.id)}
                                                    >
                                                    {category.name} 
                                                    </NavLink> )}
                    </div>
                </main>
        );
    }
}

export default SideBar;
