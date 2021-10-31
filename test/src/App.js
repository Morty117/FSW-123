import './App.css';
import Greeting from './Greeting'; 

function App() {
  return (
    // if you're invoking multiple calls, they MUST BE WRAPPED IN an enclosing tag
    // React fragment is an empty element but only allows you to have one return in your empty element component
    <>
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </>
  );
}

// Every component you create NEEDS TO BE EXPORTED else it can't be used
export default App;

