import React from 'react';
import { Clock } from "./clock/clock";

export class App extends React.Component {
  render() {
    return <div>
        <Clock></Clock>
        <Clock></Clock>
        <Clock></Clock>
    </div>
  }
}