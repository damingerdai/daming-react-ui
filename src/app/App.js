import React from 'react';
import { Clock } from "./clock/clock";
import { Greeting } from './greeting/Greeting';
import { NumberList } from './list/numbers';

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
    const numbers = [1, 2, 3, 4, 5]
    return <div>
        <button  className="btn btn-primary" onClick={() => this.toggleIsLogin()}>按钮</button>
        <Greeting isLoggedIn={this.state.isToggleOn} />,

        <NumberList numbers={numbers}></NumberList>

        <Clock></Clock>
        <Clock></Clock>
        <Clock></Clock>
    </div>
  }
}