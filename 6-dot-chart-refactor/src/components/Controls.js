import React from 'react';

const Controls = (props) => {
  return (
    <div className="controls-container">
      <button onClick={props.onDataSetOne}>Data set 1</button>
      <button onClick={props.onDataSetTwo}>Data set 2</button>
    </div>
  );
}

export default Controls;
