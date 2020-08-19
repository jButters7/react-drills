import React, { Component } from 'react'

class Array extends Component {
  constructor() {
    super();

    this.state = {
      array: ['milk', 'swimming pool', 'carrot', 'brick', 'tank', 'block', 'water', 'lava', 'orange', 'yellow', 'computer', 'cord'],
      filteredString: ""
    };
  }

  handleChanges(input) {
    this.setState({
      filteredString: input
    });
  }

  render() {
    const displayArray = this.state.array.filter((element) => {
      return element.includes(this.state.filteredString);
    })
    displayArray.map((element) => {
      return (
        <h2>{element}</h2>
      );
    });

    return (
      <div>
        <input placeholder="Sort" onChange={(event) => {
          this.handleChanges(event.target.value)
        }} type="text" />

        <div>
          {displayArray.map((element) => <h2>{element}</h2>)}
        </div>
      </div>
    )
  }
}

export default Array;