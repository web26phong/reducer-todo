import React, {useReducer} from 'react';
import './App.css';

import { initialState, TodoReducer} from "./reducers/TodoReducer";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  
  return (
    <div className="App">
      <h2>Welcome to your Todo App!</h2>
      <TodoForm dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
