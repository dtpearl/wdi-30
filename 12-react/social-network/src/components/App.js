import React, { Component } from 'react';
import Clock from './Clock';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Profile name="Groucho" age="101" motto="No gods no masters" pic="http://fillmurray.com/400/400" />
        <Profile name="Harpo" age="98" motto="No gods no masters" pic="http://fillmurray.com/401/401" />
        <Profile name="Chico" age="99" motto="" pic="http://fillmurray.com/399/399" />
      </div>
    );
  }
}

export default App;
