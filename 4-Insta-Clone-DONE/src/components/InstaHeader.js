import React from 'react';

const InstaHeader = (props) => {
  return (
    <header>
      <img src={props.card.avatar} alt="user avatar"/>
      <p className="name">{props.card.username}</p>
      <p className="time-elapsed">{props.card.time_elapsed}</p>
    </header>
  );
}

export default InstaHeader;
