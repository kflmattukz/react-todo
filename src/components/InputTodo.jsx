import { AiOutlinePlus } from 'react-icons/ai'

function InputTodo() {
  return (
    <div className="mt-5 overflow-hidden rounded-lg shadow-lg border border-blue-300">
      <form className="flex">
        <input
          type="text"
          className="grow px-3 py-2 text-xl outline-none"
          placeholder="type here"
          autocomplete="off"
          id="todo-input"
        />
        <button
          type="submit"
          className="px-3 bg-blue-600 hover:text-blue-900 text-gray-100 font-bold uppercase tracking-wide transition duration-500 ease-in-out"
          id="todo-add"
        ><AiOutlinePlus size={25} /></button>
      </form>
    </div>
  );
}

export default InputTodo;
