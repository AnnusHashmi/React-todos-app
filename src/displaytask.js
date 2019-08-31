import React, { Component } from 'react';

class DisplayTask extends Component {

    render() { 

        const {Tasks} = this.props;
        const tasklist = Tasks.map(Task => {
            return (
                <div>
                    <h2>Task: {Task.task}</h2>
                    <h3>Description: {Task.desp}</h3>
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