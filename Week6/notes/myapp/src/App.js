import './App.css';
import UseStateCounter from './UseStateCounter';
import UseStateToggle from './UseStateToggle';
import ReducerActions from './ReducerActions';
import ReducerCounter from './ReducerCounter';
import ReducerToggle from './ReducerToggle';

function App() {
  return (
    <>
    <UseStateCounter />
    <ReducerCounter />

    <UseStateToggle />
    <ReducerToggle />

    <ReducerActions />
    </>
  );
}

export default App;
