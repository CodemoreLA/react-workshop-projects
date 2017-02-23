import React, { Component } from 'react';

 class LogIn extends Component {
  constructor() {
   super();
   this.handleLogIn = this.handleLogIn.bind(this);
  }
  handleLogIn(e) {
    e.preventDefault();
    const name = this.usernameInput.value;
    this.props.onLogin(name)
  }
 	render() {
 		return (
 			<div className="log-in">
        <form onSubmit={this.handleLogIn}>
          <h3>Enter Your Username</h3>
          <input
            type="text"
            ref={(input) => this.usernameInput = input} />
          <input
            type="submit"
            value="Log in" />
        </form>
      </div>
 		);
 	}
 }

 export default LogIn;
