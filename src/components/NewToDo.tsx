import React, { useRef } from 'react';

type NewToDoProps = {
  onAddToDo: (toDoText: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const toDoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddToDo(enteredText);
  }

  return (
    <form onSubmit={toDoSubmitHandler}>
      <label htmlFor="todo-text">ToDo Text</label>
      <input type="text" id="todo-text" ref={textInputRef}/>
      <button type="submit">Add ToDo</button>
    </form>
  )
}

export default NewToDo;