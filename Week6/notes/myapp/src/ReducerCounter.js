import {useReducer} from 'react'

export default function ReducerCounter () {
    
    const reducer = (number, newNumber) => number + newNumber
    
    const [number, setNumber] = useReducer(reducer, 0)

    return (
        <>
            <h3 onClick={() => setNumber(1)}>{number}</h3>
        </>
    )
}