import React, { Component } from 'react';
import TodoItem from './TodoItem';

class CompletedList extends Component {
  componentDidMount() {
   this.props.getTodos();
  }
	render() {
		return (
			<div className="todo-list">
      <ul><h4>Done List</h4>
        {this.props.todos.map(todo => {
          return <TodoItem
                    key={todo.id}
                    item={todo}
                    onDeleteTodo={this.props.onDeleteTodo} />
        })}
      </ul>
    </div>
		);
	}
}

export default CompletedList;
