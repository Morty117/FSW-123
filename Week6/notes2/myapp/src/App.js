// prop drilling is when we define state and send that state to child components via props
import UserContext from "./UserContext"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { useState } from 'react'


function App() {

  /*
    You use Provider like any other component
      Has a value prop that is the data you want available to any of the children components that need to "cons"
      The data from the state variable username is now available for all child components defined inside Provider
  */

  const [userName, setUserName] = useState('Frank')

  return (
    <>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Header />
        <Main />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
