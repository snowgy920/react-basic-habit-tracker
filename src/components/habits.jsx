import React from "react";
import Habit from "./habit";
import HabitAddform from "./habitAddform";

const Habits = (props) => {
  return (
    <>
      <HabitAddform onAdd={props.onAdd} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
      <button className='habits-reset' onClick={props.onReset}>
        Reset All
      </button>
    </>
  );
};

export default Habits;
