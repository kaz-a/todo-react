import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TodoForm extends Component {
  constructor(){
    super();
    this.state = {
      task: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    console.log("event.target.value:", event.target.value);
    this.setState({ task: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addTask(this.state.task);

    this.setState({
      task: ""
    })
  }

  render(){
    const invalidInput = !this.state.task.length;
    const { task } = this.state;

    return(
      <div className="well">
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input name="name" type="text" className="form-control" placeholder="Enter a new task"
              onChange={ this.handleChange } value={ task } />
          </div>
          <div className="form-group">
            <button disabled={ invalidInput } className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>

    )
  }
}