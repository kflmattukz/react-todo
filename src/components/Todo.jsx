import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
  let dataTodos = [
    {
      id: 1,
      task: "Walk the cat",
      completed: false
    },
    {
      id: 2,
      task: "Learn react",
      completed: false
    },
    {
      id: 3,
      task: "Learn Express js make an API",
      completed: false
    }
  ]

  let [todos, setTodos] = useState(dataTodos)

  const handleRemove = (e,id) => {
    // console.log(e.target)
    // console.log(id)
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const todoList = todos.map((todo) => <TodoList key={todo.id} todo={todo} handleRemove={handleRemove} />)

  return (
    <div className='w-1/3 mx-auto mt-5'>
      <header className='text-center'>
        <h2 className='text-4xl font-thin text-gray-600'>Todo App</h2>
        <p className='text-xl font-semibold text-gray-700'>Manage your todo</p>
      </header>
      <TodoForm onSubmit={addTodo}  />
      {todoList}
    </div>
  )
}

export default Todo