import { useState } from "react";

// When we have a form in React, we normally have that going to have that form be a control component
// this means you reference the value to a state variable and use the onChange event, so whenever there is a change in your input field its automatically going to update your state variable


function App() {

  const [cars, setCars] = useState([""])
  const [favCar, setFavCar] = useState([""])

  const handleChange = (event) => {
    setFavCar(event.target.value)
  }

  const addCar = () => {
    const newCars = [...cars]
    newCars.push(favCar)
    setCars(newCars)
    setFavCar("")
  }

  const carList = cars.map((car, index) => <div key={index}>{car}</div>)

  console.log(favCar)

  // onChange={handleChange}, when you type something new in the input field, its going to excute the onChange event and call the handleChange() and update whats in the input field

  return (
    <>
      <label>Car: <input type="text" value={favCar} onChange={handleChange} /></label>
      <button onClick={addCar}>Add Car</button>
      <h5>My list of favorite cars</h5>
      <h5>{carList}</h5>
    </>
  );
}

export default App;
