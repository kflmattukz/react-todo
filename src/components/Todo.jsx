import React,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'

function Todo() {

  // const data = {
  //   getId(id) {
  //     return localStorage.key(id)
  //   },
  //   store(id, content) {
  //     localStorage.setItem(id, JSON.stringify(content), null, 4)
  //   },
  //   getByIndex(index) {
  //     return JSON.parse(localStorage.getItem(this.getId(index)))
  //   },
  //   getById(id) {
  //     return JSON.parse(localStorage.getItem(id))
  //   },
  //   remove(id) {
  //     localStorage.removeItem(id)
  //   },
  // }

  const [todos , setTodos] = useState([])

  // useEffect(() => {
  //   if (localStorage.length === 0) {
  //     return
  //   }
  //   for (let i = 0 ; i < localStorage.length ; i++) {
  //       todos.push(data.getByIndex(i))
  //     console.log(localStorage)
  //   }
  //   return updateTodo
  // },[])

  // function loadTodo () {
  //   let updateTodo = []
  //   for (let i = 0 ; i < localStorage.length ; i++) {
  //     const todo = data.getByIndex(i);
  //     updateTodo.push(todo)
  //   }
  //   // console.log(updateTodo)
  //   setTodos(updateTodo)
  // }
  // loadTodo()



  const addTodo = (todo) => {
    if (!todo.task && /^\s*$/.test(todo.task)) {
      return
    }

    setTodos(prevTodo => [todo, ...prevTodo])
    // data.store(todo.id , todo)
    // console.log(todos);
  }

  const completeTodo = todoId => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      // data.store(todo.id , todo)
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
    // data.store(todoId, newTask)
  }

  const removeTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
    // data.remove(todoId)
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
    <div className='flex flex-col gap-5 w-1/3 mx-auto'>
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

export default Todo