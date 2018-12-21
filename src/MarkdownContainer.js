import React, { Component } from 'react';
import './App.css';
import MarkdownField from './MarkdownField.js';
import MarkdownPreview from './MarkdownPreview.js';

class MarkdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {input: "", translated: "TEST-TEST"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log("EDIT INPUT");
  }

  render() {
    return (
      <div className="Container">
        <MarkdownField input={this.state.input} handleChange={this.handleChange}/>
        <MarkdownPreview translated={this.state.translated}/>
      </div>
    );
  }
}

export default MarkdownContainer;
