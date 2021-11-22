import { useEffect, useState } from 'react'


function App() {

  const [search, setSearch] = useState("sports")
  const [news, setNews] = useState([])

  const API = "4019bcb6e56244849f7d566903beb866"
  const URL = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API}`

  useEffect(() => {

    fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=${API}`)
      .then((respone) => respone.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log(error))

  }, [])

  const getNews = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err))
  }

  const handleClick = () => {
    getNews()
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <header>
        <input 
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search News</button>
      </header>
      <main>
        {
          news &&
          news.map((item, index) => <div className="arrticle" key={index}>{item.description}</div>)
        }
      </main>
    </>
  );
}

export default App;
