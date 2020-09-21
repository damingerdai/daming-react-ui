import React from 'react';
import { Clock } from "./clock/clock";
import { Greeting } from './greeting/Greeting';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  toggleIsLogin() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return <div>
        <button  className="btn btn-primary" onClick={() => this.toggleIsLogin()}>按钮</button>
        <Greeting isLoggedIn={this.state.isToggleOn} />,

        <Clock></Clock>
        <Clock></Clock>
        <Clock></Clock>
    </div>
  }
}