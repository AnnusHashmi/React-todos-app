import React, { Component } from 'react';

class DisplayTask extends Component {

    render() { 

        const {Tasks , deleteTask} = this.props;
        const tasklist = Tasks.map(Task => {
            return (
                <div key={Task.id}>
                    <h2>Task: {Task.task}</h2>
                    <h3>Description: {Task.desp}</h3>
                    <button onClick = {() => {deleteTask(Task.id)}}> Delete Task </button>
                </div>
            )
        })
        return ( 
            <div>
                { tasklist }
            </div>
         );
    }
}
 
export default DisplayTask;