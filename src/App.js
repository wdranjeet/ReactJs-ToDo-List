import React, { Component } from 'react';
import Title from './title';
import ToDoForm from './AddTaskForm';
import ToDoList from './List';

import './App.css';

class App extends Component {
  state = {
    value:undefined,
    ToDoList: []
  }

  AddNewTask =()=> {
    let currentState = {...this.state}
    currentState['ToDoList'].push(currentState['value'])
    this.setState({...this.state, ...currentState})
  }
  onInputChange = e => {
    this.setState({value: e.target.value});
  
  }
  render() {
    return (
      <div className="App">
       <Title title="My ToDo App"/>
       <ToDoForm onInputChange={this.onInputChange} value={this.state.value} addTask={this.AddNewTask} />
       <ToDoList lists={this.state.ToDoList}></ToDoList>
      </div>
    );
  }
}

export default App;
