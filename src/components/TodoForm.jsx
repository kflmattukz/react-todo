import React, { useState } from "react";

export default function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.task : "");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: edit ? edit.id : Math.floor(Math.random() * 1000),
      task: input,
      completed: edit ? edit.completed : false,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border border-blue-700 rounded-md overflow-hidden shadow-md"
      >
        {edit ? (
          <>
            <input
              type="text"
              name="task"
              value={input}
              onChange={handleChange}
              className="w-full py-3 px-2 outline-none"
              autoComplete="off"
            />
            <button className="px-3 text-sm font-semibold bg-blue-700 hover:bg-blue-600 text-gray-100">
              Update&nbsp;Task
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="task"
              value={input}
              onChange={handleChange}
              className="w-full py-3 px-2 outline-none"
            />
            <button className="px-3 text-sm font-semibold bg-blue-700 hover:bg-blue-600 text-gray-100">
              Add&nbsp;Task
            </button>
          </>
        )}
      </form>
    </>
  );
}
