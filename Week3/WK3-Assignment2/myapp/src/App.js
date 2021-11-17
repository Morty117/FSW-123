import TodoList from './TodoList'
import {useState} from 'react'
import {todoList} from './Store'
//console.log(todos)

function App(){

   const [todos, setTodos] = useState(todoList)

   const completeTodo = (id) => {
      const tempTodos = [...todos]
      const index = tempTodos.findIndex(item => item._id === id)

      tempTodos[index].isComplete = !tempTodos[index].isComplete

      setTodos(tempTodos)
      //console.log('index: ', index)
   }

   const deleteTodo = (id) => {
    //console.log('deleteTodo: ', id)

    // use Filter method

    const tempTodos = [...todos]

    const filteredTodos = tempTodos.filter(item => item._id !== id)
 
    setTodos(filteredTodos)
   }

  return(
    <>
      <TodoList items={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App