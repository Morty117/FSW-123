import {useState} from 'react'
import Die from './Die'

function RollDice() {
    //function RollDice({sides}) {

    const [dieOne, setDieOne] = useState(1)
    const [dieTwo, setDieTwo] = useState(1)

    const roll = () => {

        let sides = [1, 2, 3, 4, 5, 6]

        setDieOne(sides[Math.floor(Math.random() * sides.length)])
        setDieTwo(sides[Math.floor(Math.random() * sides.length)])

        console.log('random: ', Math.floor(Math.random() * sides.length))

    }

    return (
        <div>

            <button onClick={roll}>Roll Dice</button>

            <Die num={dieOne} />
            <Die num={dieTwo} />
        </div>
    )

}

//RollDice.defaultProps = {
    //sides : ['one', 'two', 'three', 'four', 'five', 'six']
//}

export default RollDice