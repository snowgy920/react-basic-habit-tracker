import React, { memo } from "react";
import { useRef } from "react";

const HabitAddform = memo((props) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <input ref={inputRef} type='text' className='add-input' placeholder='Add your habit...' />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default HabitAddform;
