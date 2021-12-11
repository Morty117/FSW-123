import CardDetail from "./CardDetail"
import YourCard from "./YourCard"

function CardList ({ cards, postYugiCards, drawCards, deleteYourCards}) {

    const handleDraw = (id) => {
        postYugiCards(id)
    }

    const handleDelete = (_id) => {
      deleteYourCards(_id)
    }

    const cardsList = cards.map(card => {
        return <CardDetail card={card} handleDraw={handleDraw}/>
    })

    const drawList = drawCards.map(card => {
      return  <YourCard drawCard={card} handleDelete={handleDelete} />
    })
    
    return(
        <>
        <h1 className="your-card-header">Your Cards</h1>
        <div className="your-cards">
          {drawList}
        </div>

        <h1 className="all-card-header">All Cards</h1>
        <div className="all-cards">
          {cardsList}  
        </div>
        </> 
    )
}

export default CardList