import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Home</h2>
        <p>
          Please check out our <Link to="/faq">frequently asked questions</Link>
        </p>
        <p>
          <Link to="/characters/Luke">Luke Skywalker</Link>
        </p>
        <p>
          <Link to="/characters/R2D2">R2D2</Link>
        </p>
      </div>
    );
  }
};

export default Home;
