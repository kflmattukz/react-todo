import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function TodoForm({onSubmit}) {
  const [input,setInput] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      task: input,
      completed: false
    })
    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  
  return (
    <div className="mt-5">
      <form
        action=""
        method="posh"
        className="flex border border-blue-600 rounded-sm overflow-hidden shadow-md group-focus:ring ring-blue-700-20"
        onSubmit={handleSubmit}
      >
        <input
          className="group px-3 py-2 outline-none flex-auto text-gray-700"
          type="text"
          value={input}
          name="todoinput"
          placeholder="Input todo" 
          onChange={handleChange} 
        />
        <button className="px-3 py-2 bg-blue-600 text-gray-100 hover:bg-blue-700 duration-300">
          <AiOutlinePlus size={25} />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
