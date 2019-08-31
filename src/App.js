import React, {Component} from 'react';
import './App.css';
import Tasks from './components/todo';
import DisplayTask from './displaytask';

class App extends Component {

  state={
    newTask : [
     
    ]
  }

  addTask = (task) => {
    task.id = Math.random();
    let doTask = [...this.state.newTask, task]
    this.setState({
      newTask: doTask
    })

  }

  deleteTask = (id) => {
    let tasks = this.state.newTask.filter( task => {
      return(
        task.id !== id
      )
    });

    this.setState({
      newTask : tasks
    })
  }
   
  render() { 
    return ( 
      <> 
        <Tasks displayTask = { this.addTask }/>
        <hr />
        <br />
        <DisplayTask Tasks = { this.state.newTask } deleteTask = { this.deleteTask }/>

      </>
     );
  }
}
 
export default App;
