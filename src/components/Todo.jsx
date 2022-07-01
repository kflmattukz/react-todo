import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  let dataTodos = [
    {
      id: 1,
      task: "Walk the cat",
      completed: false,
    },
    {
      id: 2,
      task: "Learn react",
      completed: true,
    },
    {
      id: 3,
      task: "Learn Express js make an API",
      completed: false,
    },
  ];

  let [todos, setTodos] = useState(dataTodos);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (todoid) => {
    setTodos(todos.filter((todo) => todo.id !== todoid));
  };

  const toggleComplete = (todoid) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === todoid) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  const todoList = todos.map((todo) => (
    <TodoList
      key={todo.id}
      todo={todo}
      removeTodo={removeTodo}
      toggleComplete={toggleComplete}
    />
  ));

  return (
    <div className="w-1/3 mx-auto mt-5">
      <header className="text-center">
        <h2 className="text-4xl font-thin text-gray-600">Todo App</h2>
        <p className="text-xl font-semibold text-gray-700">Manage your todo</p>
      </header>
      <TodoForm onSubmit={addTodo} />
      <div className="mt-5 flex flex-col gap-1">{todoList}</div>
    </div>
  );
}

export default Todo;
