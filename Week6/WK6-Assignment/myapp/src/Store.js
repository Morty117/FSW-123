import { v4 as uuidv4 } from 'uuid'

export const todoList = [
    {text: 'Go to the gym', isComplete: true, _id: uuidv4()},
    {text: 'Deposit check', isComplete: false, _id: uuidv4()},
    {text: 'Buy groceries', isComplete: true, _id: uuidv4()},
    {text: 'Pay utilities', isComplete: false, _id: uuidv4()}
]