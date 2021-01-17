/* eslint-disable no-useless-constructor */
import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureInputChange(e.target.value);
    }

    render() {
        const tempreature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter tempreature in {scaleNames[scale]}</legend>
                <input value={tempreature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}