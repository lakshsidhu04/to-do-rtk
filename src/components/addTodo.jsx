import React from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { addTodo } from '../Slices/Todo'
function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = React.useState('')
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <div className="mb-4">
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    className="w-full bg-white border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500 text-black"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your todo here"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo