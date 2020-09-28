/* eslint-disable no-useless-constructor */
import React from 'react';
import { TemperatureInput } from './TemperatureInput';
import { BoilingVerdict } from "./BoilingVerdict";
import { toCelsius, toFahrenheit, tryConvert } from './Utils';

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '', scale: 'c' };
        this.handleCelsusChange = this.handleCelsusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsusChange(temprature) {
        this.setState({ scale: 'c', temprature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }


    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        return (
            <div>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureInputChange={this.handleFahrenheitChange} />
                <TemperatureInput scale="c" temperature={celsius} onTemperatureInputChange={this.handleCelsusChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius, 10)} />
            </div>
        )
    }
}