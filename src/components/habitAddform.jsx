import React, { Component } from "react";

class HabitAddform extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='add-input'
          placeholder='Add your habit...'
        />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default HabitAddform;
