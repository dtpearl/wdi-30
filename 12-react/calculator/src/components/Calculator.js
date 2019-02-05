import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0
    }
    this._updateA = this._updateA.bind(this);
    this._updateB = this._updateB.bind(this);
  }

  _updateA(event) {
    const a = Number( event.target.value ) || 0;
    this.setState({ a }); // Equivalent to: {"a": a}
  }

  _updateB(event) {
    const b = Number( event.target.value ) || 0;
    this.setState({ b }); // Equivalent to {"b": b}
  }

  render() {
    const { a, b } = this.state; // Destructuring.
    return (
      <div>
        <h1>Not So Crappy Calculator</h1>
        <input type="number" value={ this.state.a || "" } onChange={ this._updateA }/>
        <input type="number" value={ this.state.b || ""} onChange={ this._updateB }/>
        <h2>Results</h2>
        <p>{ a } + { b } = { a + b }</p>
        <p>{ a } - { b } = { a - b }</p>
        <p>{ a } * { b } = { a * b }</p>
        <p>{ a } / { b } = { a / b  }</p>
        <h3>These Results Are Dedicated To Guanhua Who Fixed The Leading 0 "Feature" &mdash; Thanks!</h3>
      </div>
    );
  }
}

export default Calculator;
