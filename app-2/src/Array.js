import React, { Component } from 'react'

class Array extends Component {
  constructor() {
    super();
    this.state = {
      array: ['This', 'is', 'an', 'array', 'of', 'strings']
    }

  }

  render() {
    return (
      <div>
        {this.state.array.map((element) =>
          <p>{element}</p>)}
      </div>
    )
  }
}

export default Array;