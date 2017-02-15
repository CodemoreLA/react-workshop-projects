import React, { Component } from 'react';
import Chart from './Chart';
import { studentData } from '../student_data.js';
import { studentData2 } from '../student_data_2.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rawGrades: studentData
    };
    this.handleDataSetOne = this.handleDataSetOne.bind(this);
    this.handleDataSetTwo = this.handleDataSetTwo.bind(this);
  }
  handleDataSetOne() {
    this.setState({
      rawGrades: studentData
    }, () => console.log(this.state.rawGrades[0]))
  }
  handleDataSetTwo() {
    this.setState({
      rawGrades: studentData2
    }, () => console.log(this.state.rawGrades[0]))
  }
  render() {
    return (
      <Chart
        onDataSetOne={this.handleDataSetOne}
        onDataSetTwo={this.handleDataSetTwo}
        rawGrades={this.state.rawGrades} />
    );
  }
}

export default App;
