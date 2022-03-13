import React from 'react';
import { NavLink } from 'react-router-dom';

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