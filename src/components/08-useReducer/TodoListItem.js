import React from 'react'

export const TodoListItem = (todo, i, handleToggle, handleDelete) => {
    return (
        <li key={todo.id} className="list-group-item">
            <span onClick={e => handleToggle(todo.id)} className={`${todo.done && 'complete'}`}>{i + 1}. {todo.desc}</span>
            <button onClick={e => handleDelete(todo.id)} className="btn btn-danger mx-3">Borrar</button>
        </li>
    )
}
