import React from 'react';
import InstaHeader from './InstaHeader';
import InstaFooter from './InstaFooter';

const InstaCard = (props) => {
  return (
    <article>
      <InstaHeader card={props.card} />
      <img className="featured" src={props.card.image} alt="featured image"/>
      <InstaFooter card={props.card} />
    </article>
  );
}

export default InstaCard;
