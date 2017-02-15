import React, { Component } from 'react';
import ToolTip from './ToolTip';

class Bar extends Component {
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
    })
  }
  render() {
    const styleObj ={
      height: this.props.grade
    };
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={styleObj}
        className="bar">
          {this.state.showToolTip
            ? <ToolTip grade={this.props.grade / 5} />
            : null }
        </div>
    );
  }
}

export default Bar;
