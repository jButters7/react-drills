import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChanges(input) {
    this.setState({
      username: input
    });
  }

  handlePasswordChanges(input) {
    this.setState({
      password: input
    });
  }

  displayAlert() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input placeholder="Username" onChange={(event) => this.handleUsernameChanges(event.target.value)} />
        <input placeholder="Password" onChange={(event) => this.handlePasswordChanges(event.target.value)} />
        <button onClick={() => this.displayAlert()}>Login</button>
      </div>
    )
  }
}
export default Login;