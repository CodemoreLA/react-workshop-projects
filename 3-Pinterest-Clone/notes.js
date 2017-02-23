import React, { Component } from 'react';

class PinContainer extends Component {
  constructor() {
    super();
    this.state = {
      pins: []
    }
  }
  componentDidMount() {
    fetch('./pins.json')
      .then(pins => pins.json())
      .then(pins => {
        console.log(pins)
        this.setState({ pins: pins})
      })
  }
  render() {
    return (
      <div className="app-container">
        <h1 className="title">Cat Board</h1>
        <div className="pin-container">
          {this.state.pins.length
            ? <h3>Has data</h3>
            : <h3>Does not have data</h3>}
        </div>
      </div>
    );
  }
}

export default PinContainer;
