import React from 'react';

const FeaturedImage = (props) => {
  return (
    <div className="featured-image">
      <img
        src={`./images/${props.image_url}`}
        alt={props.image_description} />
    </div>
  );
}

export default FeaturedImage;
