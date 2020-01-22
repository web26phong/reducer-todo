import React, {useState, useReducer} from "react";
import { initialState, TodoReducer} from "../reducers/TodoReducer";

const TodoList = (props) => {
    // const [state, dispatch] = useReducer(TodoReducer, initialState);
    // console.log(state)
    console.log(props)
    return (
        <div>
            {props.state.map(item => (
                <div key={item.id} 
                // onClick={()=> dispatch({type: "TOGGLE_COMPLETED"})}
                >
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default TodoList;