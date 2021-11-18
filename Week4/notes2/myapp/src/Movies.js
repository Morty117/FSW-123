import { useParams } from "react-router-dom"

// useParams returns an object of key: value pairs of root parameters
// In this case we use it to reference the current route
// genres in the app.js in the route is defined for the movie categoreies

// for a real life application the useParams can be used to do a fetch request to an API to grab in specific data based on the param 

function Movies() {
    const {genres} = useParams()
    return <h3>Category: {genres}</h3>
}

export default Movies