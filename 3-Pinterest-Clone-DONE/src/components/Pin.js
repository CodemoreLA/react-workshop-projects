import React from 'react';
import FeaturedImage from './FeaturedImage';
import TextDetails from './TextDetails';
import PostedBy from './PostedBy';

const Pin = (props) => {

  const { pin, user } = props.pinData;

  return (
    <div className="pin">
      <FeaturedImage
        image_url={pin.image}
        image_description={pin.image_description} />
      <TextDetails
        title={pin.title}
        repinned={pin.repinned}
        main_content={pin.text} />
      <PostedBy
        avatar_url={user.avatar}
        name={user.username}
        topic={pin.topic} />
    </div>
  );
}

export default Pin;
