import React, { Component } from 'react';
import Pin from '../components/Pin';

class PinContainer extends Component {
  constructor() {
    super();
    this.state = {
      //pins: []
    }
  }
  componentDidMount() {
    fetch('./pins.json')
      .then(pins => pins.json())
      .then(pins => {
        this.setState({
          pins: pins
        });
      });
  }
  render() {
    return (
      <div className="app-container">
        <h1 className="title">Cat Board</h1>
        <div className="pin-container">
          {this.state.pins
            ? this.state.pins.map(p => {
                return <Pin
                        key={p.pin.id}
                        pinData={p} />
              })
            : <h1>No data yet</h1>}
        </div>
      </div>
    );
  }
}

export default PinContainer;
