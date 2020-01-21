import React, {useState, useReducer} from "react";
import { initialState, TodoReducer} from "../reducers/TodoReducer";

const TodoList = (props) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    console.log(state)
    return (
        <div>
            {state.map(item => (
                <p key={item.id} >{item.name}</p>
            ))}
        </div>
    );
}

export default TodoList;