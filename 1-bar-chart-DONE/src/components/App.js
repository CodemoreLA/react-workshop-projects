import React, { Component } from 'react';
import Chart from './Chart';
import { studentData } from './student_data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rawGrades: studentData
    };
  }
  render() {
    return (
      <Chart rawGrades={this.state.rawGrades} />
    );
  }
}

export default App;
