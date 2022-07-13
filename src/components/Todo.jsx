import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'

<<<<<<< HEAD
export default function Todo() {
=======
function Todo() {


>>>>>>> c9fc58c4d305a70d1468109f42623ffe2ca976d1
  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.task && /^\s*$/.test(todo.task)) {
      return
    }

    setTodos(prevTodo => [todo, ...prevTodo])
  }

  const completeTodo = todoId => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updateTodo)
  }

  const updateTodo = (todoId , newTask) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === todoId) {
        return newTask
      }
      return todo
    }))
  }

  const removeTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  const todosList = todos.map(todo => {
    return <TodoList
      key={todo.id}
      todo={todo}
      toggleComplete={completeTodo}
      toggleRemove={removeTodo}
      toggleUpdate={updateTodo}
    />
  })

  return (
    <div className='flex flex-col gap-5 w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/5 mx-auto'>
      <header className='text-center'>
        <h2 className='text-4xl font-thin text-gray-600'>Simple Todo App</h2>
        <p className='text-xl font-semibold text-gray-600'>Manage your todos here</p>
      </header>
      <TodoForm onSubmit={addTodo}/>
      <div className='flex flex-col gap-1'>
        {todos.length > 0 && todosList}
      </div>
      <TodoInfo todos={todos} />
    </div>
  )
}