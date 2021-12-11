function CardDetail({card, handleDraw}) {
    return <div className="all-cards" 
        style={{
          display: "flex",
          flexDirection: "column"
        }}>
          <img src={card.card_images[0].image_url}></img>
          <button onClick={() => handleDraw(card.id)}>Draw Card</button>
        </div>
}

export default CardDetail