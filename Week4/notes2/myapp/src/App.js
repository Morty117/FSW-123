import { BrowserRouter, Route, Link } from 'react-router-dom'
import Movies from './Movies'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Movie Categories</h2>
        <ul>
          <li><Link to="/movies/sports">Sports</Link></li>
          <li><Link to="/movies/documentary">Documentary</Link></li>
          <li><Link to="/movies/action">Action</Link></li>
          <li><Link to="/movies/health">Health</Link></li>
        </ul>
        <Route path="/movies/:genres">
          <Movies />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;