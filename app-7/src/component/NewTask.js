import React, { Component } from 'react'

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };

    this.handleButton = this.handleButton.bind(this);
  }

  handleChanges(input) {
    this.setState({ input: input });
  }

  handleButton() {
    this.props.add(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Add new task"
          onChange={event => this.handleChanges(event.target.value)}
        />
        <button onClick={this.handleButton}>Add Task!</button>
      </div>
    )
  }
}

export default NewTask
