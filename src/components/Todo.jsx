import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import { TiUploadOutline } from "react-icons/ti";

export default function Todo() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodo = (todo) => {
    if (!todo.task && /^\s*$/.test(todo.task)) {
      return;
    }
    setTodos((prevTodo) => {
      localStorage.setItem("todos", JSON.stringify([todo, ...prevTodo]));
      return [todo, ...prevTodo];
    });
  };

  const completeTodo = (todoId, completed) => {
    setTodos((prevTodos) => {
      const update = prevTodos.map((todo) => {
        if (todo.id !== todoId) return todo;
        todo.completed = !completed;
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(update));
      return update;
    });
  };

  const updateTodo = (todoId, newTask) => {
    setTodos((prevTodos) => {
      const update = prevTodos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return newTask;
      });
      localStorage.setItem("todos", JSON.stringify(update));
      return update;
    });
  };

  const removeTodo = (todoId) => {
    setTodos((prevTodos) => {
      const update = prevTodos.filter((todo) => todo.id !== todoId);
      localStorage.setItem("todos", JSON.stringify(update));
      return update;
    });
  };

  const todosList = todos.map((todo) => {
    return (
      <TodoList
        key={todo.id}
        todo={todo}
        toggleComplete={completeTodo}
        handleRemove={removeTodo}
        handleUpdate={updateTodo}
      />
    );
  });

  const todosInfo = (() => {
    return {
      all: todos.length,
      going: todos.filter((todo) => todo.completed === false).length,
      done: todos.filter((todo) => todo.completed === true).length,
    };
  })();

  return (
    <div className="flex flex-col gap-5 w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/5 mx-auto">
      <header className="text-center">
        <h2 className="text-4xl font-thin text-gray-600">Simple Todo App</h2>
        <p className="text-xl font-semibold text-gray-600">
          Manage your todos here
        </p>
      </header>
      <TodoForm onSubmit={addTodo} />
      <div className="flex flex-col gap-1">{todos.length > 0 && todosList}</div>
      <TodoInfo todos={todosInfo} />
    </div>
  );
}
