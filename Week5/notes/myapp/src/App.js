import {useEffect, useState} from 'react'

function App() {

  const [todo, setTodo] = useState({})
  const [flag, setFlag] = useState(false)

  // Side effect is anything that affects something outside the scope of the function
  // some examples:
    // 1. writing to the screen or local storage
    // 2. network requests (calls to an API)
    // 3. modifying the DOM 
  // The goal for a function is for it to be "pure":
    // - given the same input, it will always return the same output
    // - produces no side effects

    useEffect(() => {
      const getTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((data) => setTodo(data))
            .catch((error) => console.log(error))
      }

      // happens when the useEffect is triggered (after component renders)
      console.log("useEffect triggered")

      getTodo()

    }, [])
  // ^ since there is no parameters here, it will run after each render of the component. So when the component renders/re-renders, so will the useEffect()
  // if we pass in an array [] it will run after the initial render of the component, so after the component renders and won't run again
  // if we pass into the array [] [state_variable(s)], it will render/ re-render upon the change of the state

  console.log("component is rendered", todo)

  const forceRender = () => {
    // changing a state variable, which causes component to re-render
    setFlag(true)
  }
    

  return (
    <>
      <p>title: {todo.title}</p>
      <button onClick={forceRender}>Force Re-render</button>
    </>
  );
}

export default App;
