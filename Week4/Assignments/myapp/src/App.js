import TodoList from './TodoList'
import {useState} from 'react'
import {todoList} from './Store'
import { v4 as uuidv4 } from 'uuid'
//console.log(todos)

function App(){

   const [todos, setTodos] = useState(todoList)
   const [addTodo, setAddTodo] = useState("")

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
    
    const index = tempTodos.findIndex(item => item._id === id)

    tempTodos.splice(index, 1)
    // tempTodos.filter(item => item._id !== id)
 
    setTodos(tempTodos)
   }

  return(
    <>
    <input onChange={(event) => {
        const {name, value} = event.target
        setAddTodo(value)
      }} name="text"/>
      <button onClick={() => {
        setTodos([...todos, {text:addTodo, isComplete: false, _id: uuidv4}])
      }}>Add Todo</button>
      <TodoList items={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App