import React, { Component } from 'react';
import Dot from './Dot';

class Chart extends Component {
  constructor(props) {
    super(props);

    const newData = this.props.dotData.map(data => {
      return {
        id: data.id,
        x: data.x * 6,
        y: data.y * 6
      }
    });

    this.state = {
      transformedData: newData
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.dotData) {
      const newData = nextProps.dotData.map(data => {
        return {
          id: data.id,
          x: data.x * 6,
          y: data.y * 6
        }
      });

      this.state = {
        transformedData: newData
      };
    }
  }

  render() {
    return (
      <div className="scatter-plot">
        {this.state.transformedData.map(data => {
          return <Dot key={data.id} top={data.y} left={data.x} />
        })}
      </div>
    );
  }
}

export default Chart;
