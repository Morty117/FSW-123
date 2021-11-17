//import { todos } from "./Store"
import Todo from './Todo'

function TodoList ({items, completeTodo, deleteTodo}) {

    const list = items.map((todo) => {
        return <Todo key={todo._id} item={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
            
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default TodoList

//{items.map((todo, index) => {
    //return (
       //<li key={index}>{todo.text}</li>
    //)
//})}

// <li key={todo._id}><input type='checkbox'></input>{todo.text}</li>
// <button key={todo._id}>Delete</button>