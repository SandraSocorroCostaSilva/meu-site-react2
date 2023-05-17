import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
        <ul>
            <li><Link to="/">Currículo</Link></li>
            <li><Link to="/portfolio">Portfólio</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
       </nav>

    );
}

export default Navbar;