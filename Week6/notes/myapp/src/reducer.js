const nums = [2, 4, 6]
const initialState = 0

function reducer (state, value){
    return state + value
}

/* 
    takes a collection and returns a single value
    reduce returns : 
    0 + 2
    (0 + 2) + 4
    (2 + 4) + 6
    12
*/

const total = nums.reduce(reducer, initialState)

console.log(total)