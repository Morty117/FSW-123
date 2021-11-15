function Die(props){

    // .die-two etc.

    // <div className={`die-${props.num}`}></div>

    if(props.num === 1){
        return <div className={`die-1`}>
            <img key="image" src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png"/>
        </div>
    } 
    else if (props.num === 2){
        return <div className={`die-2`}>
             <img key="image" src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png"/>
        </div>
    }
    else if (props.num === 3){
        return <div className={`die-3`}>
            <img key="image" src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png"/>
        </div>
    }
    else if (props.num === 4){
        return <div className={`die-4`}>
            <img key="image" src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png"/>
        </div>

    }
    else if (props.num === 5){
        return <div className={`die-5`}>
            <img key="image" src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png"/>
        </div>

    }
    else if (props.num === 6){
        return <div className={`die-6`}>
            <img key="image" src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png"/>
        </div>

    } else {
        console.log("error")
    }

    // console.log(props.num)

    // return (
    //     <div className={`die-${props.num}`}></div> 
    // )

}

export default Die