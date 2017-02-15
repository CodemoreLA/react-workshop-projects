import React, { Component } from 'react';
import ToolTip from './ToolTip';

class Dot extends Component {
  constructor() {
    super();
    this.state = {
      showToolTip: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter() {
    this.setState({
      showToolTip: true
    })
  }
  handleMouseLeave() {
    this.setState({
      showToolTip: false
    });
  }
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
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={styleObj}
        className="dot">
        {this.state.showToolTip
          ? <ToolTip x={this.props.left} y={this.props.top} />
          : null}
      </div>
    );
  }
}

export default Dot;
