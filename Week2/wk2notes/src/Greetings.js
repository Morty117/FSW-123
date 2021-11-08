        // we are recieving the props object/gets created for every component
        // since its already an object we just have to reference it
function Greeting(
    props
    //we can also deconstruct our property from our object and pass in {message} which we will then leave out props.message and put in message on the return JSX
    // {message} as a parameter
    ) {

    return (
        <h1>{props.message}</h1>
    )
}

export default Greeting