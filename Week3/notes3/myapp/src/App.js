import { useState } from 'react';
import CarList from "./CarList"
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [cars, setCars] = useState([
    {
      id: uuidv4(),
      model: "Ford",
      brand: "Mustang"
    },
    {
      id: uuidv4(),
      model: "Honda",
      brand: "Civic"
    },
    {
      id: uuidv4(),
      model: "Subaru",
      brand: "Impreza"
    }
  ])

  const addCar = (model, brand) => {
    const newCars = [...cars,
      {
        id: uuidv4(),
        model: model,
        brand: brand
      }
    ]

    setCars(newCars)
  }

  // sometimes we may not be able to use the function in the app component, it may need to be used in another component
  // BELOW IS THE METHOD TO PASS THE FUNCTION {addCar}
  // this is the pattern you want to use when you want to update state from a child or grandchild component for other than the actual component thats being created
  return (
    <div>
      <h3>My cars</h3>
      <CarList cars={cars} addCar={addCar} />
    </div>
  );
}

export default App;
