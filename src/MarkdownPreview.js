import React, { Component } from 'react';
import './App.css';

class MarkdownPreview extends Component {

  render() {
    return (
      <div className="markdownPreview">
        <p>{this.props.translated}</p>
      </div>
    );
  }
}

export default MarkdownPreview;
