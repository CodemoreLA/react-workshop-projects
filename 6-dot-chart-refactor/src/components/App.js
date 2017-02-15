import React, { Component } from 'react';
import Chart from './Chart';
import Controls from './Controls';
import { dotData } from '../scatter-plot-data.js';
import { dotData2 } from '../scatter-plot-data2.js';
import '../style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dotData: dotData
    }
    this.handleDataSetOne = this.handleDataSetOne.bind(this);
    this.handleDataSetTwo = this.handleDataSetTwo.bind(this);
  }
  handleDataSetOne() {
    this.setState({
      dotData: dotData
    }, () => console.log(this.state.dotData[0]))
  }
  handleDataSetTwo() {
    this.setState({
      dotData: dotData2
    }, () => console.log(this.state.dotData[0]))
  }
  render() {
    return (
      <div className="chart-container">
        <h1>Scatter Plot</h1>
        <Chart
          dotData={this.state.dotData} />
        <Controls
          onDataSetOne={this.handleDataSetOne}
          onDataSetTwo={this.handleDataSetTwo} />
      </div>
    );
  }
}

export default App;
