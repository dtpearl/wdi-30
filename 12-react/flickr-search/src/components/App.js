import React, { Component } from 'react';
import FlickrSearch from './FlickrSearch';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <FlickrSearch />
      </div>
    );
  }
}
