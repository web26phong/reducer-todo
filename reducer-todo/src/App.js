import React from 'react';
import './App.css';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  
  return (
    <div className="App">
      <h2>Welcome to your Todo App!</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
