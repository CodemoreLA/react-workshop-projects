import React from 'react';

const TodoItem = (props) => {
  return (
    <li>
      {props.item.task}
      <div>
        {props.item.urgency}
        {props.showCheckbox
          ? <input
              type="checkbox"
              checked={props.item.completed}
              onClick={() => props.onComplete(props.item)}/>
          : null }
        <span onClick={() => props.onDeleteTodo(props.item)}>&times;</span>
      </div>
    </li>
  );
}

export default TodoItem;
