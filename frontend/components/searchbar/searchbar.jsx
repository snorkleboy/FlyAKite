import React from 'react';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            pattern:"",
            categoryId: -1,
            time:-1
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e) {
        const search = this.state;
        this.props.search(this.state.pattern, this.state.categoryId, this.state.time);
        this.props.history.push(`/${this.state.categoryId}`)
    }

    handleKeyPress(e){
        if (e.key === "Enter"){
            this.handleSubmit();
        }
    }
    render(){
        return (
            <div className="searchbar">
                <label>Find your next experience</label>
                <div className='cat-pattern'>
                    <input 
                        className='search-field' 
                        onKeyDown={this.handleKeyPress.bind(this)} 
                        placeholder='search for events' 
                        onChange={this.update('pattern')}
                    />
                    <select className='search-cat' id="cat-select" onChange={this.update('categoryId')}>
                        <option id={-1} value={-1}>Category</option>
                        {this.props.categories.map((cat) => <option key={cat.id} value={cat.id} id='{cat.id}'> {cat.name.toLowerCase()}</option>)} 
                    </select>
                    <select className='search-cat date' id="cat-select" onChange={this.update('time')}>
                        <option value={-1}>Time</option>
                        <option value={7}>Week</option>
                        <option value={30}>Month</option>
                        <option value={360}>Year</option>
                    </select>
                    <input 
                        className='search-button'                          
                        onClick={this.handleSubmit.bind(this)} 
                        type="submit" 
                        value="Search" 
                    />
                </div>
            </div>
        )
    }


}
export default SearchBar;