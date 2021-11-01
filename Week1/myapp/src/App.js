import Todos from './Todolist'
// {Todos} will import the array instead of the object 
//console.log(Todos.map(todo => <p>{todo}</p>))
console.log(Todos)
function DisplayTodo(){

  return(
    <>
    {Todos.map(todo => <p key={todo}><input type='checkbox'></input>{todo}</p>)}
    </>
  )
}
// keys re-render only the specific items the application changed 

export default DisplayTodo