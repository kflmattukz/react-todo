import {AiOutlineCheck,AiOutlineEdit} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'

function Todolist (props) {
    let {task , completed} = props.todo
    return (
        <div className="flex flex-col">
            <div className="flex items-center item mt-5 overflow-hidden rounded-lg shadow-lg bg-white">
                <p className={`grow ml-2 text-gray-700 truncate ${ completed && line-through }`}>{task}</p>
                <div className="action">
                    <button className="text-gray-100 text-sm font-semibold tracking bg-green-500 p-2"><AiOutlineCheck size={20} /></button>
                    <button className="text-gray-100 text-sm font-semibold tracking bg-yellow-500 p-2"><AiOutlineEdit size={20}/></button>
                    <button className="text-gray-100 text-sm font-semibold tracking bg-red-500 p-2"><FaTimes size={20}/></button>
                </div>
            </div>
        </div>
    )
}

export default Todolist