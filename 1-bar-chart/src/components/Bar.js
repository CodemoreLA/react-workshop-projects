import React, { Component } from 'react';

class Bar extends Component {
  render() {
    const styleObj ={
      height: this.props.grade
    };
    return (
      <div
        style={styleObj}
        className="bar"></div>
    );
  }
}

export default Bar;
