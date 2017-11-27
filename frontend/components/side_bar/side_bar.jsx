import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SelectEntityInOrder} from '../../reducers/selectors/selectors';
class SideBar extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if (!this.props.categories.indexLoaded) this.props.getAllCatgories();
        

    }
    render(){
        const cats = (SelectEntityInOrder(this.props.categories))
            return(
            <main className='sideBar'>
                <div className='SideBar-buttons-list'>
       
                        {cats.map((category, i) => <button className='sidebar-button' key={`side-bar-button-${i}`}> {`${category.name}`} </button> )}
                </div>
            </main>
        );
    }
}

export default SideBar;
