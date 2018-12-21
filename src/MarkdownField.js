import React, { Component } from 'react';
import './App.css';

class MarkdownField extends Component {

  render() {
    return (
      <div className="markdownField">
        <input defaultValue={this.props.input} onChange={this.props.handleChange}/>
      </div>
    );
  }
}

export default MarkdownField;
