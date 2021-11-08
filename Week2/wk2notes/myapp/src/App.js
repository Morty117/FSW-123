// import Picture from './Picture'
// import Button from './Button'
// import { cats } from './data'

// function App() {

//   const image = {
//     // These are key value pairs
//     id: 1,
//     src: "https://placekitten.com/200/300",
//     desc: "My Cat",
//     location: "California"
//   }

//   // this allows you to pass in string literal, elements and other components as a part of props but its stored in a special prop called children
//   return (
//     <>
//       <Picture src={image.src}>
//           <h3>{image.desc}</h3>
//           <h5>I live in {image.location}</h5>
//           <Button />
//       </Picture>
//     </>  
//   );
// }

// function App() {
//   const foundCat = cats.find((cat) => cat.location === "New York")
    
//   if(foundCat){
//     return (
//       <Picture src={foundCat.src} alt={foundCat.desc}>
//         <h3>{foundCat.desc}</h3>
//         <h5>I live in {foundCat.location}</h5>
//         <Button />
//       </Picture>  
//       );
//   } else {
//     return (<h1>No cats found!</h1>)
//   }
// }

import PictureList from "./PictureList"
import { cats } from './data'
import './App.css'

function App() {
  // const list = ['cat', 'dog', 'bird']

  // const listItems = list.map((item, index) => <li key={index}>{item}</li>)

  // class is reserved in React so we have to use className
  // best practice for styling in React is to create a seperate CSS file per component
  // if there is a CSS file for each component, then you need to import the CSS file wherever the component lies in the JS files

  return(
    // <ul>{listItems}</ul>
    <div className='app'>
      <PictureList cats={cats} />
    </div>
  )
}

export default App;