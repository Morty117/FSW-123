import {useState} from 'react'
import DisplayGreeting from "./DisplayGreeting"

function App() {
  const [greeting, setGreeting] = useState('Good Morning')

  const changeGreeting = () => {
    setGreeting("Good Night!")
  }

  return (
    <div>
      <DisplayGreeting greeting={greeting} />
        <button onClick={changeGreeting}>Change Greeting</button>
    </div>
  );
}

export default App;
