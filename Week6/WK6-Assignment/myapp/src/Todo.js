import { useState } from "react"

function Todo({item, completeTodo, deleteTodo, updateTodo}) {

    const [editing, setEditing] = useState(false)
    const [updates, setUpdates] = useState(item.text)
    const [empty, setEmpty] = useState(false)

    const handleEdit = () => {
        setEditing(prevToggle => !prevToggle)
    }

    const handleUpdates = (e) => {
        (e.target.value === '') ? setEmpty(true) : setEmpty(false)
        setUpdates(e.target.value)
    }

    console.log('empty: ', empty)

    return (
        
            <>
            {   !editing ?
                <li key={item._id}>
                <input type="checkbox" checked={item.isComplete} onChange={() => completeTodo(item._id)} />
                <span style={{textDecoration: item.isComplete ? "line-through" : ""}}>{item.text}</span>
                <button onClick={() => deleteTodo(item._id)}>Delete</button>
                <button disabled={item.isComplete} onClick={handleEdit}>Edit Todo</button>
                </li>
                :
                <form onSubmit={(e) => {
                    e.preventDefault()
           
                    updateTodo(item._id, updates)
                    handleEdit()
                }}>
                    <input onChange={handleUpdates} type='text' name="text" value={updates}/>
                    <button disabled={empty} type='submit'>Update Todo</button>
                    <button onClick={() =>{
                        
                        handleEdit()
                    }} type='button'>Cancel</button>
                </form>
            }
            </>      
    )
}

export default Todo