import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

function TodoList(props) {
  const [isEdit , setIsEdit] = useState(false)
  const { task, completed, id } = props.todo
  const { removeTodo, toggleComplete, todoEdit } = props

  const handleRemove = (id) => {
    removeTodo(id)
  };

  const handleToggleComplete = (id) => {
    toggleComplete(id)
  };

  const handleEdit = (todo) => {
    setIsEdit( prevIsEdit => !isEdit)
  }

  return (
    <>
      { isEdit ? <TodoForm /> : <div
      className={`flex bg-white shadow-sm border items-center border-gray-300 rounded-sm text-gray-800 font-medium ${
        completed ? "opacity-80 line-through" : ""
      }`}
    >
      <p className="flex-auto pl-3 text-gray-600" onDoubleClick={() => handleEdit(props.todo)}>{task}</p>
      <button className="p-2" onClick={() => handleToggleComplete(id)}>
        <AiOutlineCheck size={20} className="pointer-events-none" />
      </button>
      <button className="p-2" onClick={() => handleRemove(id)}>
        <FaTimes size={20} className="pointer-events-none" />
      </button>
    </div>}
    </>
  );
}

export default TodoList;
