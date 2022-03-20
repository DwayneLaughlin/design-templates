import React from "react";
// NAVLINK replaces <a> tags so the page doesn't refresh when someone clicks on the links. 
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <header>
            <h1>Book Manager App</h1>
            <hr />
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Book List
                </NavLink>

                <NavLink to="/add" className="link" activeClassName="active">
                    Add a Book
                </NavLink>
            </div>
        </header>
    )
}

export default Header