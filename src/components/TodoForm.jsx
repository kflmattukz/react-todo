import React ,{useState}from 'react'

function TodoForm({onSubmit,edit}) {
  const [input, setInput] = useState(edit ? edit.task : '');

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({
      id: edit ? edit.id : Math.floor(Math.random() * 1000),
      task:input,
      completed: false
    })

    setInput('')
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center border border-blue-500 rounded-md overflow-hidden shadow-md">
        { edit ? (
          <>
            <input 
            type="text" 
            name="task" 
            value={input}
            onChange={handleChange}
            className="flex-1 px-3 py-2 outline-none"
            />
            <button className="px-3 py-3 text-sm font-semibold bg-blue-700 text-gray-100">Update Task</button>
          </>
        ) : (
          <>
            <input 
            type="text" 
            name="task" 
            value={input}
            onChange={handleChange}
            className="flex-1 px-3 py-2 outline-none"
            />
          <button className="px-3 py-3 text-sm font-semibold bg-blue-700 text-gray-100">Add Task</button>
          </>
        )
          
        }
      </form>
    </>
  )
}

export default TodoForm