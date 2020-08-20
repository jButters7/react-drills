import React, { Component } from 'react';
import './App.css';
import Todo from './component/Todo'

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ''
    };

    this.handleButton = this.handleButton.bind(this);
  }

  handleChanges(input) {
    this.setState({ input: input });
  }

  handleButton() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }


  render() {
    let toDoList = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input
            value={this.state.input}
            placeholder="Add new task"
            onChange={event => this.handleChanges(event.target.value)}
          />
          <button onClick={this.handleButton}>Add Task!</button>
        </div>
        {toDoList}
      </div>
    );
  }
}

export default App;
