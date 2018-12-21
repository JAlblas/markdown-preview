import React, { Component } from 'react';
import './App.css';

class MarkdownContainer extends Component {

  render() {
    return (
      <div className="Container">
        <textarea id="editor" defaultValue="# Header">
        </textarea>
        <p id="preview">
          Preview
        </p>
        <Markdown/>
        <Preview/>
      </div>
    );
  }
}

export default MarkdownContainer;
