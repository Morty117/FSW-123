import MoviesList from './MoviesList'
import {movies} from './data'

function App() {
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
