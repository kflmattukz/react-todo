import React from 'react'

function TodoInfo({todos}) {

  return (
    <div className='p-3 flex items-center justify-between bg-white shadow rounded-md capitalize font-semibold text-gray-600'>
      <p>done : {todos.filter(todo => todo.completed === true).length}</p>
      <p>going : {todos.filter(todo => todo.completed === false).length}</p>
      <p>all : {todos.length}</p>
    </div>
  )
}

export default TodoInfo