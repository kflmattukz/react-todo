import React from 'react'

export default function TodoInfo({todos}) {

  return (
    <div className='p-3 flex justify-between bg-white shadow rounded-md capitalize font-semibold text-gray-600'>
      <p>all : {todos.length}</p>
      <p>going : {todos.filter(todo => todo.completed === false).length}</p>
      <p>done : {todos.filter(todo => todo.completed === true).length}</p>
    </div>
  )
}