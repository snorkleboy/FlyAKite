import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
        cats.push({name:"all", id:0});
            return(
                <main id='category-holder' className='sideBar'>
                        <div  className='SideBar-buttons-list'>
                            {cats.map((category, i) => <button className='sidebar-button' onClick={this.newHandle(category.id)} id={category.id} key={`${category.id}side-bar-button`}><h1> {`${category.name}`} </h1></button> )}
                    </div>
                </main>
        );
    }
}

export default SideBar;
