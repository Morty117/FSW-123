//import { todos } from "./Store"

function TodoList ({items}) {
    const list = items.map((todo, index) => {
        return(
        <li key={index}><input type='checkbox'></input>{todo.text}</li>)
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