import React from 'react';

const ToolTip = (props) => {
  return (
    <span className="tool-tip">
      <p>x:{props.x}</p>
      <p>y:{props.y}</p>
    </span>
  );
}

export default ToolTip;
