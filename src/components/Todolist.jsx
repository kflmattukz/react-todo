function Todolist () {
    return (
        <div className="mx-auto flex flex-col">
            <div className="flex items-center item mt-5 w-1/2 sd:w-1/3 mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
                <p className="grow ml-2 text-gray-700 truncate">Item 1</p>
                <div className="action">
                    <button className="text-gray-100 text-sm font-semibold tracking bg-green-500 p-2">Completed</button>
                    <button className="text-gray-100 text-sm font-semibold tracking bg-yellow-500 p-2">Edit</button>
                    <button className="text-gray-100 text-sm font-semibold tracking bg-red-500 p-2">Delete</button>
                </div>
            </div>
            <div className="flex items-center item mt-5 w-1/2 sd:w-1/3 mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
                <p className="grow ml-2 text-gray-700 truncate">Item 2</p>
                <div className="action">
                    <button className="text-gray-100 text-sm font-semibold tracking bg-green-500 p-2">Completed</button>
                    <button className="text-gray-100 text-sm font-semibold tracking bg-yellow-500 p-2">Edit</button>
                    <button className="text-gray-100 text-sm font-semibold tracking bg-red-500 p-2">Delete</button>
                </div>
            </div>
            <div className="flex items-center item mt-5 w-1/2 sd:w-1/3 mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
                <p className="grow ml-2 text-gray-700 truncate">Item 3</p>
                <div className="action">
                    <button className="text-gray-100 text-sm font-semibold tracking bg-green-500 p-2">Completed</button>
                    <button className="text-gray-100 text-sm font-semibold tracking bg-yellow-500 p-2">Edit</button>
                    <button className="text-gray-100 text-sm font-semibold tracking bg-red-500 p-2">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todolist