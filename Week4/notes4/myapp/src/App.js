import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Admin from './components/pages/Admin'
import Browserusers from './components/pages/Browserusers'
import UserProfile from './components/pages/UserProfile'
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users'>
            <Browserusers />
          </Route>
          <Route path='/admin'>
            <Admins />
          </Route>
          <Route path='/user/:userId/:name'>
            <UserProfile />
          </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
