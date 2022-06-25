import Header from './components/Header'
import InputTodo from './components/InputTodo'
import Todolist from './components/Todolist'

function App() {

  let todos = [
    {
      id: 1,
      task: "learn javascript",
      completed: false
    },
    {
      id: 2,
      task: "learn react",
      completed: false
    },
    {
      id: 3,
      task: "make a simple project app",
      completed: false
    }
  ]

  let todoList = todos.map( todo => {
    return <Todolist key={todo.id} todo={todo}/>
  })

  return (
    <div className="App w-1/3 mx-auto">
      <Header/>
      <InputTodo />
      {todoList}
    </div>
  )
}

export default App
