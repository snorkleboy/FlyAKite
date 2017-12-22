import React from 'react';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            pattern:"",
            categoryId: -1
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const search = this.state;
        this.props.search(this.state.pattern, this.state.categoryId);
    }


    render(){
        return (
            <div className="searchbar">
                <label className='cat&pattern'>searchbar
                    <select id="cat-select" onChange={this.update('categoryId')}>
                        <option id={-1} value={-1}>any</option>
                        {this.props.categories.map((cat) => <option value={cat.id} id='{cat.id}'> {cat.name.toLowerCase()}</option>)} 
                    </select>
                    <input className='search-field' onChange={this.update('pattern')}> 
                    </input>
                    <input className='signup-button' onClick={this.handleSubmit.bind(this)} type="submit" value="Search" />
                </label>
            </div>
        )
    }


}
export default SearchBar;