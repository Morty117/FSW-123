import './App.css';
import Greeting from './Greeting';
import Reply from './Reply';

function App() {
  return (
    // if you're invoking multiple calls, they MUST BE WRAPPED IN an enclosing tag
    // React fragment is an empty element but only allows you to have one return in your empty element component

    // Greeting and Reply are childs of the App() component but from Reply to Greeting, they are siblings
    <>
      <Greeting />
      <Reply />
    </>
  );
}

// Every component you create NEEDS TO BE EXPORTED else it can't be used
export default App;