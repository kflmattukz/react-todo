import React, { useState } from "react";

const addColor = "blue";
const updateColor = "emerald";

const availableColors =
  "border-blue-700 border-emerald-700 bg-blue-700 bg-emerald-700 hover:bg-blue-600 hover:bg-emerald-600";

export default function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.task : "");

  const borderUpdate = `border-${updateColor}-700`;
  const borderAdd = `border-${addColor}-700`;

  const buttonUpdate = `bg-${updateColor}-700 hover:bg-${updateColor}-600`;
  const buttonAdd = `bg-${addColor}-700 hover:bg-${addColor}-600`;

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

  // console.log({ borderUpdate, borderAdd, buttonUpdate, buttonAdd });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex border rounded-md overflow-hidden shadow-md ${" "} ${
          edit ? borderUpdate : borderAdd
        }`}
      >
        {
          <>
            <input
              type="text"
              name="task"
              value={input}
              onChange={handleChange}
              className="w-full py-3 px-2 outline-none"
              autoComplete="off"
            />
            <button
              className={`px-3 text-sm font-semibold text-gray-100 ${
                edit ? buttonUpdate : buttonAdd
              }`}
            >
              {edit ? "Update" : "Add"}&nbsp;Task
            </button>
          </>
        }
      </form>
    </>
  );
}
