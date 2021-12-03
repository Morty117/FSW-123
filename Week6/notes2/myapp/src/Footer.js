import { useContext } from "react";
import UserContext from "./UserContext";

function Footer() {
    const { userName, setUserName } = useContext(UserContext)

    return (
        <>
            <h3>In Main, username is {userName}</h3>
            <button onClick={() => setUserName('Joe')}>Change user name to Joe</button>
        </>
    )
}

export default Footer