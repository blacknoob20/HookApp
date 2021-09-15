import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
    // El dispatch es una funcion que toma una accion y la setea al reducer correspondiente
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = todoId => {
        console.log(todoId);
        const action = { type: 'del', payload: todoId };

        dispatch(action);
    };

    const handleToggle = todoId => dispatch({ type: 'tog', payload: todoId });

    const handleAddTodo = newTodo => dispatch({ type: 'add', payload: newTodo });

    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
                    </div>
                    <div className="col">
                        <TodoAdd handleAddTodo={handleAddTodo} />
                    </div>
                </div>
            </div>
        </>

    )
}
