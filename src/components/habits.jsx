import React, { Component } from "react";
import Habit from "./habit";
import HabitAddform from "./habitAddform";

class Habits extends Component {
  render() {
    const habits = this.props.habits;
    return (
      <>
        <HabitAddform onAdd={this.props.onAdd} />
        <ul>
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className='habits-reset' onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
