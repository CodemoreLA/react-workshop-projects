import React, { Component } from 'react';
import Chart from './Chart';
import { dotData } from '../scatter-plot-data.js';
import '../style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dotData: dotData
    }
  }

  render() {
    return (
      <div className="chart-container">
        <h1>Scatter Plot</h1>
        <Chart dotData={this.state.dotData} />
      </div>
    );
  }
}

export default App;
