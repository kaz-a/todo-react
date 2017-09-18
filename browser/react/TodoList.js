import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TodoList extends Component {
  constructor(){
    super();
    this.status = {
      tasks: []
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(taskId){
    this.props.deleteTask(taskId)
  }


  render(){
    const { tasks } = this.props;
    console.log("tasks:", tasks);
    const doneBtn = {
      "marginTop": "-5px"
    }

    return (
      <div>
        <ul className="list-group">
        {
          tasks.map(task => {
            return (
              <li key={ task.id } className="list-group-item">{ task.name }
                <button className="btn btn-warning btn-sm pull-right" 
                  style={ doneBtn }
                  onClick={ () => this.handleDelete(task.id) } >Done</button>
              </li>
            )
          })
        }

        </ul>
      </div>
    )
  }
}
