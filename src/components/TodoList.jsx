import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'

function TodoList(props) {
  const {task,completed,id} = props.todo
  const {handleRemove} = props
  
  return (
    <div className={`mt-5 flex ${completed ? 'opacity-80' : ''}`}>
      <p className='flex-auto'>{task}</p>
      <button className='p-2'><AiOutlineCheck size={20} /></button>
      <button className='p-2' onClick={(e) => handleRemove(e,id)}><FaTimes size={20} className='pointer-events-none' /></button>
    </div>
  )
}

export default TodoList