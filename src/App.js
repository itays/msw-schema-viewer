import React, { Component } from 'react';
import logo from './logo.svg';
import {Voyager} from 'graphql-voyager';
import './App.css';

function introspectionProvider(query) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({query: query}),
  }).then(response => response.json());
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          
        </div>
        
      </div>
    );
  }
}

export default App;
