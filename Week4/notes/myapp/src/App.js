import './App.css';
import{BrowserRouter, Route, Switch, Link} from 'react-router-dom'
// need these files from react-router-dom which are the main components
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import NoMatch from './NoMatch'

// the Link components are going to render as <a></a> but you have to use these in order for it to work within the routes you setup in react router
// Switch is a conditional on matching one of these paths to our defined path in our Link route 
// NoMatch.js is meant for the endpoints that do not exist in the routes path and returns an error

// When you click the back arrow it will take you to the previous endpoints you were looking through and this happen because react-router-dom uses context API which is a state management tool
// Keeps a history off the routes navigated to, also can be found in the React components in Google dev tools

function App() {
  return(
    <>
      <BrowserRouter>
        <header>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </header>

        <main>
          <Switch>
            <Route exact={true} path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/products'>
              <Products />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='+'>
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;
