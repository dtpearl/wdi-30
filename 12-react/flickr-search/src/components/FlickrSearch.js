import React, { Component } from 'react';
import jsonp from 'jsonp-es6'; // IRL: we'd use Axios for regular AJAX (see tomorrow)

class FlickrSearch extends Component {
  constructor() {
    super();
    this.state = {
      images: [] // Whenever these change <Gallery /> will rerender (because Gallery's props will change)
    };
    this.fetchImages = this.fetchImages.bind(this);
  };

  // This is kinda an event handler but it's not being called by a user interface event.
  fetchImages(q) {
    console.log('Searching Flickr for', q);
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: q,
      format: 'json'
    };

    const generateURL = function (p) {
      return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // Change 'q' to something else from the docs for different sizes
      ].join('');
    };

    // This actually initiates the request to Flick for images matching the term `q`.
    // In real life we'd use `axios` or `fetch` to make this request.
    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'}).then((results) => {
      const images = results.photos.photo.map(generateURL);
      this.setState({images}); // {"images": images}
    });

  }

  render() {
    return (
      <div>
      {/*
        The parent FlickrSearch can't interact with the child (SearchForm)'s state directly.
        But it CAN pass in a callback for the child to call/invoke/run at the appropriate time,
        and that callback can access the state of the child from the parent's scope.
      */}
        <SearchForm onSubmit={ this.fetchImages } />
        <Gallery images={ this.state.images }/>
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    this.setState({query: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    // We "handle" the submit by running whatever function the parent passed to us as onSubmit.
    // And we pass in the thing the parent probably cares about, in this case: the query.
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Butterfly" required onInput={ this._handleInput }/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.images.map( (url) => <Image url={url} /> ) }
      </div>
    );
  }
}

// Functional component -- good when you don't need state
function Image (props) {
  return (
    <img src={ props.url } width="150" height="150" />
  )
}

export default FlickrSearch;
