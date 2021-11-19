function Todo({item, completeTodo, deleteTodo}) {

    return (
        <li key={item._id}>
            <input type="checkbox" checked={item.isComplete} onChange={() => completeTodo(item._id)} />
            <span style={{textDecoration: item.isComplete ? "line-through" : ""}}>{item.text}</span>
            <button onClick={() => deleteTodo(item._id)}>Delete</button>
        </li>
    )
}

export default Todo

 //   (id === true) ? <TodoList style={{textDecoration: "line-through"}} items={todos}/> : <TodoList items={todos}/>

 // if a = b ? do this : do something else