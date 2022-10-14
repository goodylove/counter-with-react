import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrement() {
    this.setState({
      counter:
        this.state.counter <= 0
          ? (this.state.counter = 0)
          : this.state.counter - 1,
    });
  }
  render() {
    return (
      <div>
        <h3> Count value is:{this.state.counter}</h3>
        <button onClick={() => this.increment()} className="increaseBtn">
          increment
        </button>
        <button onClick={() => this.decrement()} className="decreaseBtn">
          decrement
        </button>
      </div>
    );
  }
}

export default Counter;
