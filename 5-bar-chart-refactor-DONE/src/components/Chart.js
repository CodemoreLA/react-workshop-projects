import React, { Component } from 'react';
import Bar from './Bar';
import Controls from './Controls';

class Chart extends Component {
  componentWillMount() {
    this.setState({
      transformedGrades: this.props.rawGrades.map(studentObj => {
        return {
          name: studentObj.name,
          score: studentObj.score * 5,
          student_id: studentObj.student_id
        }
      }) // end of map
    }); // end of setState
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.rawGrades) {
      this.setState({
        transformedGrades: nextProps.rawGrades.map(studentObj => {
          return {
            name: studentObj.name,
            score: studentObj.score * 5,
            student_id: studentObj.student_id
          }
        }) // end of map
      }); // end of setState
    } // end if(nextProps)
  }
  render() {
    return (
      <div className="chart-container">
        <h1>React.js Final Grades</h1>
        <div className="chart">
          {this.state.transformedGrades.map(studentObj => {
            return <Bar
                      key={studentObj.student_id}
                      grade={studentObj.score} />
          })}
        </div>
        <Controls
          onDataSetOne={this.props.onDataSetOne}
          onDataSetTwo={this.props.onDataSetTwo} />
      </div>
    );
  }
}

export default Chart;
