import React, { Component } from 'react';

class Dot extends Component {
  render() {
    let styleObj = {
      top: this.props.top,
      left: this.props.left
    };
    // extra style logic
    if(this.props.top % 5 === 0) {
      styleObj.backgroundColor = '#AB47BC';
      styleObj.borderColor = '#4A148C';
    }

    return (
      <div style={styleObj} className="dot"></div>
    );
  }
}

export default Dot;
