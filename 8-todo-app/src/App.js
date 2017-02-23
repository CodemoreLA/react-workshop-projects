import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import TodoList from './TodoList';
import LogIn from './LogIn';
import CompletedList from './CompletedList';
import './style.css';

class App extends Component {
  constructor() {
    super();
    const username = localStorage.getItem('username');
    this.state = {
      username: username,
      todos: []
    }
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleGetTodos = this.handleGetTodos.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
  }
  handleLogIn(username) {
    this.setState({
      username: username
    }, () => {
      localStorage.setItem('username', this.state.username);
    });
  }
  handleLogOut() {
    this.setState({
      username: null
    }, () => {
      localStorage.removeItem('username');
    });
  }

  // Todo CRUD operations
  handleGetTodos() {
    axios.get('http://localhost:8019/todos')
      .then(res => {
        this.setState({
          todos: res.data
        })
      })
  }
  handleAddTodo(todo) {
    axios.post('http://localhost:8019/todo', todo)
      .then(res => {
        const newTodo = res.data;
        this.setState({
          todos: [newTodo, ...this.state.todos]
        })
      })
  }
  handleDeleteTodo(toDelete) {
    axios.delete(`http://localhost:8019/todo/${toDelete.id}`)
      .then(res => {
        if(res.data === 1) {
          const newTodoArray = this.state.todos.filter(todo => todo.id !== toDelete.id);
          this.setState({
            todos: newTodoArray
          })
        }

      })
  }
  handleCompleteTodo(todo) {
    const payload = {
      updates: {
        completed: !todo.completed
      }
    };
    axios.patch(`http://localhost:8019/todo/${todo.id}`, payload)
      .then(res => {
        const newTodoArray = this.state.todos.map(old => {
          if(old.id === todo.id) {
            old = res.data;
          }
          return old;
        })
        this.setState({
          todos: newTodoArray
        })
      })
  }
  render() {
    if(this.state.username) {
      return (
        <div className="container">
          <h1>Hello {this.state.username}!</h1>
          <button
            className="log-out"
            onClick={this.handleLogOut}>Log out</button>
          <Link to="/">Todo</Link>
          <Link to="/completed">Completed</Link>
          <Route
            exact={true}
            path="/"
            render={() => <TodoList
                              getTodos={this.handleGetTodos}
                              onAddTodo={this.handleAddTodo}
                              onDeleteTodo={this.handleDeleteTodo}
                              onComplete={this.handleCompleteTodo}
                              todos={this.state.todos} />} />
          <Route
            path="/completed"
            render={() => <CompletedList
                              getTodos={this.handleGetTodos}
                              onDeleteTodo={this.handleDeleteTodo}
                              todos={this.state.todos.filter(todo => todo.completed)} />}/>
        </div>
      );
    } else {
      return (
        <Route redirect="/login"
                render={() => (<LogIn
                                onLogin={this.handleLogIn} />)} />
      );
    }
  }
}

export default App;
