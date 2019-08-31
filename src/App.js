import React, {Component, Fragment} from 'react';
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
   
  render() { 
    return ( 
      <> 
        <Tasks displayTask = { this.addTask }/>
        <hr />
        <br />
        <DisplayTask Tasks = { this.state.newTask }/>

      </>
     );
  }
}
 
export default App;
