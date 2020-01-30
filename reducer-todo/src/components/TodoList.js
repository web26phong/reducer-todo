import React, {useState, useReducer} from "react";
import { initialState, TodoReducer} from "../reducers/TodoReducer";

const TodoList = (props) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    // console.log(state)
    console.log(props.state)

    return (
        <div>
            {props.state.map(item => (
                <div key={item.id} className={`todo${item.completed ? " completed" : ""}`}
                onClick={()=> props.dispatch({type: "TOGGLE_COMPLETED", payload: {id: item.id, name: item.name}})}
                >
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default TodoList;