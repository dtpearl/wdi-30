import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Change this in production.
// const SERVER_URL = 'http://95a3f46c.ngrok.io/secrets.json';

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.content );
    this.setState({content: ''}); // Clear out the form for the next secret.
    // How would we give focus back to the textarea? refs
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.secrets.map( (s) => <p key={s.id}>{s.content}</p> ) }
      </div>
    );
  }
}

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };
    this.saveSecret = this.saveSecret.bind(this);

    const fetchSecrets = () => {
      axios.get(SERVER_URL).then( (results) => {
        this.setState({secrets: results.data});
        setTimeout(fetchSecrets, 4000);
      });
    };

    fetchSecrets();
  }

  saveSecret(content) {
    axios.post(SERVER_URL, {content}).then((results) => {
      // Spread operator ...
      this.setState({ secrets: [results.data, ...this.state.secrets] });
    });
  }

  render() {
    return (
      <div>
        <h1>Tell Us All Your Secrets</h1>
        <SecretForm onSubmit={ this.saveSecret }   />
        <Gallery secrets={ this.state.secrets }/>
      </div>
    );
  }
}

export default Secrets;
