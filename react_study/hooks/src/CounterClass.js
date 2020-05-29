import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h4>The Class count is : {this.state.count}</h4>
        <button onClick={this.increment}>Count</button>
      </div>
    );
  }
}
