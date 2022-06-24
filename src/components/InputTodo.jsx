function InputTodo() {
  return (
    <div className="mt-5 w-1/2 mx-auto overflow-hidden rounded-lg shadow-lg border border-blue-300">
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
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
