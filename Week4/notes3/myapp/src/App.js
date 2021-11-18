import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Posts from './Posts'

// sometimes in our applications we want to render a links inside of other links, so in the Route path, we input a component to another route

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/'>
            <h3>Home</h3>
          </Route>
          <Route path='/posts'>
            <Posts />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
