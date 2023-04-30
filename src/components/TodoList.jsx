import React, { useState } from "react";
import { TiEdit, TiTimes } from "react-icons/ti";
import TodoForm from "./TodoForm";

export default function TodoList({
  todo,
  toggleComplete,
  handleRemove,
  handleUpdate,
}) {
  const [edit, setEdit] = useState({
    id: null,
    task: "",
    completed: false,
  });

  const { id, task, completed } = todo;

  const updateTodo = (newTask) => {
    handleUpdate(edit.id, newTask);
    setEdit({
      id: null,
      task: "",
      completed: false,
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={updateTodo} autoFocus={true} />;
  }

  return (
    <div
      className={`flex ${
        completed ? "opacity-50 line-through" : ""
      } shadow-md p-3 items-center bg-white rounded-md border border-gray-300`}
      onDoubleClick={() => toggleComplete(id, completed)}
    >
      <p className="flex-1 font-semibold text-gray-600 text-md truncate select-none">
        {task}
      </p>
      <div className="action flex text-gray-700 gap-3 items-center">
        <button
          className="pointer hover:text-red-600 duration-300"
          onClick={() => handleRemove(id)}
        >
          <TiTimes size={23} />
        </button>
        <button
          className="pointer hover:text-blue-600 duration-300"
          onClick={() => setEdit({ id: id, task: task, completed: completed })}
        >
          <TiEdit size={20} />
        </button>
      </div>
    </div>
  );
}
