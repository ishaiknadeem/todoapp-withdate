import React, {useState, useEffect} from 'react'

const EditModelComponent = (props) => {

const [inputvalue, setInputValue] = useState('');
const [todo, setTodo] = useState({});


useEffect(() => {
    setInputValue(props.todo.val);
    setTodo(props.todo)
},[props.todo])

const handleChange = (e) => {
    setInputValue(e.target.value)
} 
    return (
        <div className= {`${props.isOpen?'block':
        'hidden' } absolute bg-blue-100 p-8 rounded inset-0 text-gray-900`} >
        <h2 className="text-gray-900 text-lg">
            Update Todo 
        </h2>

         <form className="w-full flex justify-between items-center mb-4 items-end" onSubmit={(e) => {props.updateTodo(e, inputvalue)}}>
            <div className=''>
                <label htmlFor="todotext"
                className='text-xs text-gray-600 select-none block'>
                    Edit Task
                </label>


                <input type="text"
                className=" bg-white py-1 px-2 rounded" 
                value={inputvalue}
                onChange={handleChange}
                ></input>
                </div>

                <button 
                className='h-8 p-2 rounded bg-white' 
                type="submit"

                >
                ✔️
                </button> 
            </form>
        </div>
        
        )
}

export default EditModelComponent;
