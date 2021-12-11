function YourCard({ drawCard, handleDelete }){

    return (
        <div style={{display: "flex",
            flexDirection: "column",
        }}>
            <img src={drawCard.description}></img>
            <button onClick={() => handleDelete(drawCard._id)}>Delete Card</button>
        </div>
    )
}

export default YourCard