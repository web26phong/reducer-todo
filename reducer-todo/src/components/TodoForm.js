import React from "react";

const TodoForm = () => {

    return (
        <form className="form">
            <input title="enter a todo here" type="text" name="todo"/>
            <button title="click to to add a Todo" >Add Todo</button>
            <button title="Click on a Todo to mark as completed">Clear Completed Todos</button>
        </form>
    );
}

export default TodoForm;