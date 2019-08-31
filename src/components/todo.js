import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task: '',
            desp: ''
         }
         this.onChangeHandle = this.onChangeHandle.bind(this);
    }

    onChangeHandle(event){
        this.setState({ [event.target.name] : event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.displayTask(this.state);
    }

    render() { 
        return ( 
        <div>

            <h2>Task:</h2>
            <input type="text" placeholder="Enter task" name="task" onChange = {this.onChangeHandle}/>
            <br />

            <h2>Discription:</h2>
            <input type="text" placeholder="Enter description" name="desp"  onChange = {this.onChangeHandle}/>
            <br />

            <button onClick = {this.onSubmit}>Add Task</button>
        </div>
         );
    }
}
 
export default Task;