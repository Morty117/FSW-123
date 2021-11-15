# State
    - the state of a program at any given time refers to the snapshot of the data the program is currently looking/analyzing to get to the next step in its execution

# Hooks rule set
    - ONLY call hooks at the top level, at the very top of your definition of your function components
    - DON'T call Hooks inside of loops, conditions or nested functions
    - DON'T call Hooks from regular JS functions 
    - BUT call Hooks from React function components or from custom Hooks

# Hooks
    - A Hook is special fucntion that lets you "hook into" React feature, like useState that lets you add React state to function components
    - instead of creating a class component, we can use useState in functional components to create "state variables" 
    - useState is a new way to use the exact same capabilities that this.state provides in a class

# Props VS State
## Props:
    - similar to arguments of a function
    - are read-only in the child component, the only time props value should change is in the component that sends it
    - can be passed down children
    - causes a re-render when parent component updates the prop

## State:
    - used when a component needs to keep track of information that will change
    - creating within the component
    - can be updated using useState hook only (do not modify state directly)
    - must be updated from the component that owns it, wherever you define particular state variables in a component, you need to update it within that component(function that using it)
    - can be passed down to children as Props
    - can be updated by children by passing functions
    - causes a re-render when changed