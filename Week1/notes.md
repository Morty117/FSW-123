# What is an SPA 
    - with the invention of AJAX(Asynchronous Javascript and XML), developers did not need to make multiple HTML and this brought us the SPA(Single Page Application)
    - SPA is a web application/website that interacts with the user by dynamically rewriting the current web page with new data from the web browser
    = This method eliminated the need to load entirely new webpages
    - React is a library used to create SPAs that's designed to update the browser DOM for us
    - React DOM  is made up of React elements(known as Virtual DOM)
    = VDOM enables the declarative API of React : you tell React what state you want the UI to be in, and it makes sure the DOM matches that state
    = Eliminates the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app
    - A React element is a description of what the actual DOM element should look like, React elements are the instructions for how the browser DOM should be created

    # Key points to remember
    - the entire app lives on one HTML page only
    - instead of static HTML files, JS renders the screen dynamically, therefore, the HTML page that is first downloaded is actually almost entirely empty of content
    - all scripts and files needed to run the application are generally downloaded in the beginning, when retrieving the main HTML file(note: for larger SPAs, it can be different)