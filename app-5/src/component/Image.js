import React, { Component } from 'react'

class Image extends Component {
  render() {
    return (
      <img src={this.props.url} alt="mount-everest" />
    )
  }
}

export default Image