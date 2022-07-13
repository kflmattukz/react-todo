import React ,{useState} from 'react'
import {TiEdit ,TiTimes} from 'react-icons/ti'
import TodoForm from './TodoForm'

export default function TodoList({todo,toggleComplete,toggleRemove,toggleUpdate}) {
  const [edit , setEdit] = useState({
    id: null,
    task: '',
    completed: false
  })

  const {id , task , completed} = todo

  const updateTodo = (newTask) => {
    toggleUpdate(edit.id , newTask)
    setEdit({
      id: null,
      task: '',
      completed: false
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={updateTodo} autoFocus={true} />
  }

  return (
    <div className={`flex ${completed ? 'opacity-50 line-through' : ''} shadow-md p-2 items-center bg-white rounded-md border border-gray-300`} onDoubleClick={() => toggleComplete(id)} >
      <p className='flex-1 font-semibold text-gray-700 text-md truncate'>{task}</p>
      <div className="action flex text-gray-700 gap-3 items-center">
        <TiTimes onClick={() => toggleRemove(id)} size={23} />
        <TiEdit onClick={() => setEdit({id: id , task: task, completed: completed})} size={20} />
      </div>
    </div>
  )
}