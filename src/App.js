import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownContainer from './MarkdownContainer.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MarkdownContainer />
        </header>
      </div>
    );
  }
}

export default App;
