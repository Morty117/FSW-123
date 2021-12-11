import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navbar">
            <h1>Yugi-Oh Cards</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default NavBar