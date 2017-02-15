import React from 'react';

const PinCountIcon = (props) => {
  return (
    <span className="pin-count">
      <i className="fa fa-thumb-tack"></i>
      {props.repinned}
    </span>
  );
}

export default PinCountIcon;
