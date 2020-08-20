import React, { Component } from 'react'

class Text extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
  }

  handleChanges(input) {
    this.setState({
      message: input
    })
  }

  render() {
    return (
      <div>
        <input placeholder="Text will display below" onChange={(event) => this.handleChanges(event.target.value)} type="text" />
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default Text