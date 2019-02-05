import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    /* oh */ super(); // this calls the original constructor from Component()
    this.state = { clicks: 0 };
    this._incrementClicks = this._incrementClicks.bind(this);
  }

  // Event handlers start with an underscore (_) by convention.
  _incrementClicks() {
    // WRONG: this.state.clicks += 1; // Cannot mutate state directly (React won't notice)
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    console.log('render()');
    return (
      <button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>
    );
  }
}

export default Clickr;
