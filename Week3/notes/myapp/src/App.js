import './App.css';
import {useState} from "react"

// the state of a program at any given time refers to the snapshot of the data the program is currently looking/analyzing to get to the next step in its execution
// State is app data that may change over time
// Data is going to be changing and re-rendering the concepts

// hooks are functions that we can import to a functional component to give functionality thats going to mimmick the built in functionality of class components
// Only class components could use state, but with hooks functional components can have useState 

// for the variable you set in useState, just add set when you use as function

function App() {
  
  // THIS method is to use multiple changes in a state without creating individual set states, but for this one we are using an array of objects
  const [cars, setCar] = useState([
    {
      model: "Ford",
      brand: "Mustang"
    },
    {
      model: "Honda",
      brand: "Civic"
    },
    {
      model: "Subaru",
      brand: "Impreza"
    }
  ])

  const changeCar = (model, brand) => {
    const newCars = [...cars, {
      model: model,
      brand: brand
    }
  ]

    setCar(newCars)
  }

  const carList = cars.map((car, index) => <div key={index}>{car.model} {car.brand}</div>)
  
  return(
    <div>
      <h3>My Cars</h3>
      <div>{carList}</div>
        <button onClick={() => changeCar("BMW", "323")}>Change Car</button>
    </div>
  )
  // If you DO NOT place the event listener inside of an arrow function, the function call will send in infinite loop and cause a re-render error


  // THIS method is to use multiple changes in a state without creating individual set states, but for this one we are using one object
  // const changeCar = () => {
  //   const newCar = {
  //     brand: "Honda",
  //     model: "Civic",
  //     color: "gold",
  //     year: "2018"
  //   }

  //   setCar(newCar)

  //   console.log(car.brand, car.model, car.color, car.year)
  // }

  // return(
  //   <div>
  //     <h3>My {car.brand}</h3>
  //       <p>It is a {car.color}, {car.model} from {car.year}</p>
  //       <button onClick={changeCar}>Change Car</button>
  //   </div>
  // )



  // THIS method is for individual states
  // const [carBrand, setCarBrand] = useState("Ford")
  // const [carModel, setCarModel] = useState("Mustang")
  // const [carColor, setCarColor] = useState("red")
  // const [carYear, setCarYear] = useState("1964")
  
  // THIS method is without the use of hooks
  // const car = {
  //   brand: "Ford",
  //   Model: "Mustang",
  //   Color: "Red",
  //   Year: "1964",
  // }

  // THIS method is for individual states
  // const changeCar = () => {
  //   setCarBrand("Honda")
  //   setCarModel("Civic")
  //   setCarColor("gold")
  //   setCarYear("2018")
 
  // THIS method is without the use of hooks
  //   // car.brand = "Honda";
  //   // car.Model = "Civic";
  //   // car.Color = "Gold";
  //   // car.Year = "2018";

  //   console.log(carBrand, carModel, carColor, carYear)
  // }

}



// this was without state 
{/* <div className="app">
      <h3>My {car.brand}</h3>
        <p>
          It is a {car.Color} {car.Model} from {car.Year}.
        </p>
        <button onClick={changeCar}>Change car</button>
</div> */}


// This was with the state
// return(
//   <div className="app">
//     <h3>My {carBrand}</h3>
//       <p>
//         It is a {carColor} {carModel} from {carYear}.
//       </p>
//       <button onClick={changeCar}>Change car</button>
//   </div>
// )

export default App;
