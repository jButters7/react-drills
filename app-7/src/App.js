import React, { Component } from 'react';
import './App.css';
import NewTask from './component/NewTask';
import List from './component/List'

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }



  handleAddTask(task) {
    this.setState({
      list: [...this.state.list, task]
    });
  }


  render() {
    return (
      <div className="App" >
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
