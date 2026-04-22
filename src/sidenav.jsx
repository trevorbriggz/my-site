import './index.css'
import {Link, useLocation } from "react-router-dom";

function sidenav() {
    const location = useLocation();

    return (
        <div className="sidenav">
            directory:

            / {location.pathname === "/" 
                ? <span className="currentlocation">home</span> 
                : <Link to="/">home</Link>}

            / {location.pathname === "/about" 
                ? <span className="currentlocation">about</span> 
                : <Link to="/about">about</Link>}

            / {location.pathname === "/hobbies" 
                ? <span className="currentlocation">hobbies</span> 
                : <Link to="/hobbies">hobbies</Link>}

            / {location.pathname === "/contact" 
                ? <span className="currentlocation">contact</span> 
                : <Link to="/contact">contact</Link>}
        </div>
    )
}

export default sidenav;