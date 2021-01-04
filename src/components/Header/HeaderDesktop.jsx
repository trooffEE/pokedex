import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderDesktop = () => {
    return (
        <>
            <NavLink className="header-item" to='/'>
                    <h3 className="header-item__title">All Pokémons</h3>
            </NavLink>
            <NavLink className="header-item" to='/surprise'>
                <h3 className="header-item__title">Surprise Me</h3>
            </NavLink>
            <NavLink className="header-item" to='/your-collection'>
                <h3 className="header-item__title">Your Collection</h3>
            </NavLink>
        </>
    );
}

export default HeaderDesktop;
