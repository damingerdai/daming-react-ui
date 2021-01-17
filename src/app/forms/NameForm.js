/* eslint-disable no-useless-constructor */
import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的名字：' + this.state.value);
        event.preventDefaulat();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="提交"></input>
            </form>
        )
    }
}