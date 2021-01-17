import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
    }   

    handleInputChange(e) {
        this.props.onSearchBarValueChange(e.target.value);
    }

    handleRadioChange(e) {
        const checked = Boolean(e.target.checked);
        this.props.onSearchBarRadioChange(checked);
    }

    render() {
        const { value }= this.props;
        return (
            <div>
                <input placeholder="Search..." value={value} onChange={this.handleInputChange}></input>
                <label>
                <input type="checkbox" onChange ={this.handleRadioChange} />Only show products in stock
                </label>
            </div>
        )
    }
}