import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  handleSubmit = (e) => {
      //const title = this.state;
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={this.onChange}
          name="title"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo;
