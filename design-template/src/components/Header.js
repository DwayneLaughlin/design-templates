import React from 'react';
import { NavLink } from 'react-router-dom';

// THIS WILL CREATE THE NAVIGATION TEMPLATE FOR THE HEADER. USING NAVLINK INSTEAD OF AN ANCHOR ELEMENT MAKES SURE THAT THE PAGE DOESN'T REALOAD WHEN LINKS ARE CLICKED.
const Header = () => {
    return (
        <header>
            <h1>Book Management App</h1>
            <hr />
            <div>
                <NavLink to="/">
                    Books List
                </NavLink> 

                <NavLink to='/add'>
                    Add Book
                </NavLink>
            </div>
        </header>
    )
};

export default Header