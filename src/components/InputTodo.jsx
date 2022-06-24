function InputTodo () {
    return (
        <div className="pt-5 w-1/2 mx-auto">
            <form className="w-full flex flex-row">
                <input type="text" name="todo-item" id="todo-item" className="flex-1 px-3 py-0 rounded-md border border-gray-300 outline-none shadow-md text-xl"/>
                <button type="submit" className="bg-blue-600 m-1 p-3 rounded border border-blue-700 text-gray-100 font-bold tracking-wide">Add Todo</button>
            </form>
        </div>
    )
}

export default InputTodo