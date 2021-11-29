import './App.css';
import { useState, useEffect } from 'react'



function App() {

  const [gif, setGif] = useState("")

  const initialSearch = 'baseball'

  const getGif = (findGif = initialSearch) => {

    console.log(findGif)

    const API = 'gVYgEuPaYv3yo4l3OG8HIj2bYhN7P4Za'
    const URL = `https://api.giphy.com/v1/gifs/search?q=${findGif}&api_key=${API}`

    fetch(URL)
      .then((res) => res.json())
      .then((data) => 
      setGif(
        data.data[0].images.fixed_height_downsampled.url
      ))
      .catch((error) => console.log(error))
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(e.target.search.value)
    getGif(e.target.search.value)
  }

  useEffect(getGif, [])

  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" name="search" />
        <button type="submit">Find Gif</button>
      </form>
      <img src={gif} alt='' />
    </>
  );
}

export default App;
