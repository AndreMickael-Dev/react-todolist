import React from "react";  // Remove useState since we're getting it from props

export default function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
  return (
    <header>
      <input 
        value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)} 
        placeholder="Enter a task" 
      />
      <button onClick={() => {
        handleAddTodos(todoValue);
        setTodoValue('');
      }}>
        Add
      </button>
    </header>
  );
}
