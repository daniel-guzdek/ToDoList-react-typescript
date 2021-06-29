import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  // const [todos, setTodos] = useState<{id: string; text: string;}[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  const toDoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos,
      {id: Math.random().toString(), text: text}
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <h4>React-TypeScript</h4>
      <NewToDo onAddToDo={toDoAddHandler}/>
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
