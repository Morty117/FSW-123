import TodoList from './TodoList'
import {todos} from './Store'
console.log(todos)

function App(){

  return(
    <>
      <TodoList items={todos}/>
    </>
  )
}

export default App