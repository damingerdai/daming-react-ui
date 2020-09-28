import React from 'react';
import { Clock } from "./clock/clock";
import { Greeting } from './greeting/Greeting';
import { NumberList } from './list/numbers';
import { Blog } from './blog/blog';
import { NameForm } from './forms/NameForm';
import { EssayForm } from './forms/EssayForm';
import { FlavorForm } from './forms/FlavorForm';
import { Reservation } from './forms/Reservation';
import { Calculator } from './lifting-state-up/Calculator';
import { ProductTable } from './search/ProductTable';

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
    const numbers = [1, 2, 3, 4, 5];
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    return <div>
        <ProductTable/>
        <Calculator />
        <button  className="btn btn-primary" onClick={() => this.toggleIsLogin()}>按钮</button>
        <Greeting isLoggedIn={this.state.isToggleOn} />,

        <NumberList numbers={numbers}></NumberList>
        <Blog posts={posts}></Blog>
        
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <Reservation />

        <Clock></Clock>
        <Clock></Clock>
        <Clock></Clock>
    </div>
  }
}