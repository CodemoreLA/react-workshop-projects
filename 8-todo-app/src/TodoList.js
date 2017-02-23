import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor() {
    super();
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
  }
  componentDidMount() {
    this.props.getTodos();
  }
  handleTodoAdd(e) {
    e.preventDefault();
    const newTodo = {
      task: this.todoText.value,
      urgency: this.urgency.value
    }
    this.props.onAddTodo(newTodo);
    this.todoText.value = '';
    this.urgency.value = 'low';
  }
  render() {
 		return (
 			<div className="todo-list">
        <form onSubmit={this.handleTodoAdd}>
          <input
            ref={(input) => this.todoText = input}
            type="text"/>
          <select
            ref={(select) => this.urgency = select}
            name="urgency">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input type="submit" value="Add todo"/>
        </form>
        <ul><h4>Todo List</h4>
          {this.props.todos.filter(todo => !todo.completed).map(todo => {
            return <TodoItem
                      showCheckbox={true}
                      onComplete={this.props.onComplete}
                      onDeleteTodo={this.props.onDeleteTodo}
                      key={todo.id}
                      item={todo} />
          })}
        </ul>
      </div>
 		);
 	}
}

 export default TodoList;
