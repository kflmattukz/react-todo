import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'

function TodoList(props) {
  const {task,completed,id} = props.todo
  const {removeTodo,toggleComplete} = props

  const handleRemove = (id) => {
    removeTodo(id)
  }

  const handleToggleComplete = (id) => {
    toggleComplete(id)
  }
  
  return (
    <div className={`flex bg-white shadow-sm border items-center border-gray-300 rounded-sm text-gray-800 font-medium ${completed ? "opacity-80 line-through" : ""}`}>
      <p className='flex-auto pl-3'>{task}</p>
      <button className='p-2' onClick={(e) => handleToggleComplete(id)}><AiOutlineCheck size={20} className='pointer-events-none' /></button>
      <button className='p-2' onClick={(e) => handleRemove(id)}><FaTimes size={20} className='pointer-events-none' /></button>
    </div>
  )
}

export default TodoList