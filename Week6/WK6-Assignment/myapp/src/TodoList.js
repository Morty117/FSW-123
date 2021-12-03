import Todo from './Todo'

function TodoList ({items, completeTodo, deleteTodo, updateTodo}) {

    const list = items.map((todo) => {
        return <Todo key={todo._id} item={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default TodoList