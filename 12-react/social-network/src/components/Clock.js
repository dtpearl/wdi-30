import React, { Component } from 'react';

// TODO:
// Create a <Time /> that shows how many seconds the user has been on the page.
// You loaded this page 9 seconds ago.

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: ( new Date() ).toString() };

    // es6: fat arrow syntax
    // fat arrow functions DO NOT BREAK THE CONNECTION TO this
    setInterval(() => {
      this.setState({
        time: ( new Date() ).toString()
      });
    }, 1000);
  }

  render() {
    return (
      <h3>The time is { this.state.time }</h3>
    );
  }
}

export default Clock;
