

function Greeting(){
    // babel will transpile React elements to JS elements
    // JSX produces reat elements
    // We can have multiple React elements in a component

    const greeting = 'Good morning!'
    // whenever you want to put JS inside of the return or React return we must use the curly braces {}

    return (
        <h1>{greeting}</h1>
    );
}

export default Greeting;