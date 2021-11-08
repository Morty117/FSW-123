import './App.css';
import Greeting from './Greetings'

// props are objects that is created for each component
// there is a props objects that you add key value pairs to, similar to arguments to a function
// if you want to pass data down from a parent to a child, you would use props: strings, booleans, numbers, arrays, functions etc.
// THE DATA IS ONLY READ-ONLY, CANNOT BE CHANGED

function App() {
  return (
    <>
      <Greeting message = 'Good morning' />
    </>
  )
}

export default App;
