import Todos from './Todolist'

function DisplayTodo(){
  let todo1 = Todos[0]
  let todo2 = Todos[1]
  let todo3 = Todos[2]

  return(
    <>
    <input type='checkbox'>{todo1}</input>
    <input type='checkbox'>{todo2}</input>
    <input type='checkbox'>{todo3}</input>
    </>
  )
}

export default DisplayTodo