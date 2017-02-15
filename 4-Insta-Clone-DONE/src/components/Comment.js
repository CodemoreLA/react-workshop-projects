import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment-block">
      <div className="username">{props.comment.username}</div>
      <div className="comment-content">{props.comment.comment}</div>
    </div>
  );
}

export default Comment;
