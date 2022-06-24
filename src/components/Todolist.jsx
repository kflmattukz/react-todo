function Todolist () {
    return (
        <div className="w-1/2 mx-auto flex flex-col">
            <div className="item">
                <p>Item 1</p>
                <div className="action">
                    <button>Completed</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todolist