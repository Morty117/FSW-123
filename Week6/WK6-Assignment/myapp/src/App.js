import TodoList from './TodoList'
import {useState} from 'react'
import {todoList} from './Store'
import { v4 as uuidv4 } from 'uuid'

function App(){

   const [todos, setTodos] = useState(todoList)
   const [addTodo, setAddTodo] = useState("")

   const completeTodo = (id) => {
      const tempTodos = [...todos]
      const index = tempTodos.findIndex(item => item._id === id)

      tempTodos[index].isComplete = !tempTodos[index].isComplete

      setTodos(tempTodos)
   }

   const deleteTodo = (id) => {
    const tempTodos = [...todos]
    
    const index = tempTodos.findIndex(item => item._id === id)

    tempTodos.splice(index, 1)
 
    setTodos(tempTodos)
   }

   const updateTodo = (id, update) => {
      const tempTodos = [...todos]
      const todoId = tempTodos.findIndex(item => item._id === id) 
      Object.assign(tempTodos[todoId], {text: update})
      console.log(tempTodos[todoId])
   }

  return(
    <>
    <input onChange={(event) => {
        const {value} = event.target
        setAddTodo(value)
      }} name="text"/>
      <button onClick={() => {
        setTodos([...todos, {text:addTodo, isComplete: false, _id: uuidv4}])
      }}>Add Todo</button>
      <TodoList items={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </>
  )
}

export default App