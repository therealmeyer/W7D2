import React from 'react';
import { uniqueId } from '../../util/util';
import merge from 'lodash/merge';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    // const { createTodo } = this.props;
    const done = {done: false };
    // const newState = merge({}, this.state, id);
    const newState = merge({}, this.state, done);

    this.props.createTodo(newState).then(() => this.setState({ title: "", body: "" }));
  }

  handleTitleChange (event) {
    event.preventDefault();
    this.setState({ title: event.target.value});
  }

  handleBodyChange (event) {
    event.preventDefault();
    this.setState({ body: event.target.value});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title
          <input type="text" onChange={this.handleTitleChange} value={this.state.title}></input>
        </label>

        <label> Body
          <textarea onChange={this.handleBodyChange} value={this.state.body}/>
        </label>

        <input type="submit" value="Submit" />

      </form>
    );
  }
}


export default TodoForm;
