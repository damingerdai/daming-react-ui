import React from "react";
import { Clock } from "./clock/clock";
import { WelcomeDialog } from "./composition-vs-inheritance/welcome-dialog";
import { Greeting } from "./greeting/Greeting";
import { HooksExample } from "./hooks";
import { Calculator } from "./lifting-state-up/Calculator";
import { NumberList } from "./list/numbers";
import { Blog } from "./blog/blog";
import { NameForm } from "./forms/NameForm";
import { EssayForm } from "./forms/EssayForm";
import { FlavorForm } from "./forms/FlavorForm";
import { Reservation } from "./forms/Reservation";
import { ProductTable } from "./search/ProductTable";
import Counter from './redux';

import './App.scss';

export { store } from './redux';

class Hello extends React.Component {
  render() {
    return React.createElement("div", null, `Hello ${this.props.name}`);
  }
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  toggleIsLogin() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm.",
      },
    ];
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <p className="navbar-brand">Navbar</p>
        </nav>
        <div className="content">
          <Counter />
          <HooksExample />
          <ProductTable />
          <Calculator />
          <Hello name="damingerdai" />
          <button
            className="btn btn-primary"
            onClick={() => this.toggleIsLogin()}
          >
            按钮
          </button>
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
          <Calculator />
          <WelcomeDialog />
        </div>
      </div>
    );
  }
}
