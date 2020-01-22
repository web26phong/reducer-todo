import React, {useState, useReducer} from "react";
import { initialState, TodoReducer} from "../reducers/TodoReducer";

const TodoForm = (props) => {
    // const [state, dispatch] = useReducer(TodoReducer, initialState);
    const [newTodoText, setNewTodoText] = useState("");

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };

    return (
        <form className="form">
            <input type="text" name="todo" onChange={handleChanges} value={newTodoText}/>
            <abutton onClick={() => props.dispatch({ type: 'ADD_TODO', payload: newTodoText})}>Add Todo</abutton>
            <abutton>Clear Completed Todos</abutton>
        </form>
    );
}

export default TodoForm;