import React, {useState, useReducer} from "react";
import { initialState, TodoReducer} from "../reducers/TodoReducer";

const TodoForm = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const [newTodoText, setNewTodoText] = useState("");

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    }

    return (
        <form className="form">
            <input type="text" name="todo" onChange={handleChanges} value={newTodoText}/>
            <button >Add Todo</button>
            <button >Clear Completed Todos</button>
        </form>
    );
}

export default TodoForm;