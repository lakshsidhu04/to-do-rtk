import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { removeTodo, toggleComplete } from '../Slices/Todo'
function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Todos</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
                        <div>
                            <button onClick={() => dispatch(removeTodo(todo.id))} className="mr-2 text-red-500 hover:text-red-700">Delete</button>
                            <button onClick={() => dispatch(toggleComplete(todo.id))} className={`text-${todo.completed ? 'green' : 'blue'}-500 hover:text-${todo.completed ? 'green' : 'blue'}-700`}>{todo.completed ? 'Undo' : 'Complete'}</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Todos