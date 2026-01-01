import { Link } from "react-router-dom";

function Nav(){



    return <nav className="nav">

        <div className="nav-brand" > 
            <Link to="/" >POKEMON</Link>
        </div>

        <div className="nav-items">
            <Link to="/">HOME</Link>
            <Link to="/Fav" >Favourites</Link>
        </div>
    </nav>
}

export default Nav;