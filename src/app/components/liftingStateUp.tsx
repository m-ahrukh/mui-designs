import React, { useState } from "react";

function TodoCount({todos}) {
  return <div>Total Number of Todos: {todos.length}</div>
}

function TodoList({todos}) {
  
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

function AddTodo({setTodos}){
  function handleSubmit(event){
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    console.log(todo);
    setTodos((prev) => [...prev, todo])
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
export default function LiftingStateUp() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2', 'todo 3']);

  return (
    <>
      <TodoCount todos={todos}/>
      <TodoList todos={todos}/>
      <AddTodo setTodos={setTodos}/>
    </>
  );
}