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
    } 

    newHandle(id){
        return (e) => {
            this.props.setSort(e.target.innerText);  
            this.props.history.push(`/${id}`);
        };
    }
    
    render(){

        const cats = (SelectEntityInOrder(this.props.categories));
        
        if (this.props.loggedIn){
            cats.unshift({name:"MY REGISTERED EVENTS", id:"registered" });
            cats.unshift({name: "MY BOOKMARKED EVENTS", id: "bookmarked" });    

        }
        cats.unshift({name:"ALL", id:0});
        
            return(
                <main id='category-holder' className='sideBar'>
                        <div  className='SideBar-buttons-list'>
                        {cats.map((category, i) => <NavLink activeClassName="sidebar-button-active" 
                                                    className='sidebar-button' 
                                                    to={`/${category.id}`} 
                                                    key={`${category.id}side-bar-button`}>{category.name} </NavLink> )}
                    </div>
                </main>
        );
    }
}

export default SideBar;
