import Morning from './Morning';
import Evening from './Evening';

function Greeting(){
    // babel will transpile React elements to JS elements
    // JSX produces reat elements
    // We can have multiple React elements in a component
    // any JS code we want must be input before the return statement

    // const greeting = 'Good morning!'
    // whenever you want to put JS inside of the return or React return we must use the curly braces {}

    const curHour = new Date().getHours();
    let greeting;

    if(curHour > 12){
        greeting = <Evening />;
    } else {
        greeting = <Morning />
    }

    return (
        <h1>{greeting}</h1>
    );
}

export default Greeting;