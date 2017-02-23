import React from 'react';
import Comment from './Comment';

const InstaFooter = (props) => {
  return (
    <footer>
      <div className="likes">{props.card.likes} likes</div>
      <div className="comment">
        {props.card.comments.map(comment => {
          return (
            <Comment comment={comment} />
          );
        })}
      </div>
    </footer>
  );
}

export default InstaFooter;
