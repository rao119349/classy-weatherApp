import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count:5}
  }
  render() {
    return <div>
      <button onClick={handleDec}>-</button>
      <span>{this.state.count}</span>
      <button onClick={handleInc}>+</button>
    </div>
  }
}

export default Counter;