import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = { height: 100 };
    this._zoomIn = this._zoomIn.bind(this);
    this._zoomOut = this._zoomOut.bind(this);
  }

  _zoomIn() {
    this.setState({
      height: this.state.height + 10
    });
  }

  _zoomOut() {
    this.setState({
      height: this.state.height - 10
    });
  }

  render() {
    const { name, age, motto, pic } = this.props; // destructuring
    return (
      <div className="profile">
        <h1>{ name }</h1>
        <h2>Age: { age }</h2>
        <p>Motto: { motto }</p>
        <div>
          <button onClick={ this._zoomIn }> + </button>
          <button onClick={ this._zoomOut }> - </button>
        </div>
        <img src={ pic } alt={ name } height={ this.state.height }/>
      </div>
    );
  }
}

export default Profile;
