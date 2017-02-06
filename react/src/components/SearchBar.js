import React, {Component} from 'react';

class SearchBar extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.refs['filterTextInput'].value
        );
    }

    render() {
        return (
            <form style={{width: '20%', float: 'left', padding: '0.7em', margin: 'auto'}}>
                <input
                    type="text"
                    placeholder="Search Comedy"
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default SearchBar;
