import React, { Component } from 'react'
import Todo from './Todo'

class List extends Component {
  render() {
    let toDoList = this.props.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div>{toDoList}</div>
    )
  }
}

export default List