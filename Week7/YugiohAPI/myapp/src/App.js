import './App.css';
import Home from './yugicomponents/Home';
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './yugicomponents/Navbar';
import About from './yugicomponents/About';

function App() {
  
  return(
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        
          <Route path="/about">
            <About />
          </Route>
        </Switch>

      </Router>
    </>
  )
}

export default App;

