import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count:5}
  }

  handleDecrement () {
    console.log(this.state.count);
  }

  handleIncrement () {
    console.log(this.state.count);
  }

  render() {
    return <div>
      <button onClick={this.handleDecrement}>-</button>
      <span>{this.state.count}</span>
      <button onClick={this.handleIncrement}>+</button>
    </div>
  }
}

export default Counter;