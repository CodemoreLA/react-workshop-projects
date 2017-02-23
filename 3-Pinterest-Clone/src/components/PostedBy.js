import React from 'react';

const PostedBy = (props) => {
  return (
    <div className="posted-by">
      <img src={`./images/${props.avatar_url}`} alt={props.name} />
      <span>
        <p className="name">{props.name}</p>
        <p className="topic">{props.topic}</p>
      </span>
    </div>
  );
}

export default PostedBy;
