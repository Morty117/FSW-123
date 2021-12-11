import { useState, useEffect } from 'react';
import axios from 'axios'
import CardList from "./Cardslist"

function Home(){
    
    const [allcards, setAllCards] = useState([])
    const [drawCards, setDrawCard] = useState([])

    const getYugiCards = () => {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then(res => {
            let cards = res.data.data.splice(0, 500)
            console.log(cards)
            setAllCards(cards)
      })
      .catch(err => console.log(err))
    }

    const postYugiCards = (id) => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
          .then(res => {
            let cards = res.data.data

            console.log('res: ', res.data.data)

            const drawCard = { 
              name: cards[0].name,
              description: cards[0].card_images[0].image_url
            }

            axios.post("http://api.bryanuniversity.edu/anthonyHernandez/list", drawCard)
              .then(res => {
                console.log(res)
                setDrawCard(prevstate => ([...prevstate, drawCard]))
              })
          })
          .catch(err => console.log(err))
    }

  const deleteYourCards = (_id) => {
    axios.delete(`http://api.bryanuniversity.edu/anthonyHernandez/list/${_id}`)
      .then(res => getBUApi(_id))
      .catch(err => console.log(err))
  }
    

    const getBUApi = () => {
      axios.get("http://api.bryanuniversity.edu/anthonyHernandez/list")
        .then(res => {
          console.log(res.data)
          setDrawCard(res.data)})
        .catch(err => console.log(err))
    }


  useEffect(() => {
    getYugiCards()
    getBUApi()
  }, [])

  return (
    <>
        <div className='home-header'>
            <h1>Here is where you can see over 500 cards pulled from another API</h1>
            <h2>Try adding some cards to your deck!</h2>
        </div>
        <CardList cards={allcards} postYugiCards={postYugiCards} drawCards={drawCards} deleteYourCards={deleteYourCards} />
    </>
  )
}

export default Home