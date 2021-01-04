import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderMobile.css'

class HeaderMobile extends Component {

    constructor(props) {
        super();
        this.state = {
            isBurgerToggled: false,
        };
    }
    
    handleToggleChange = () => {
        this.setState({isBurgerToggled: !this.state.isBurgerToggled});
    }

    renderMenu = () => {
        if (!this.state.isBurgerToggled) {
            return null;
        }

        return (
            <div className="menu">
                <NavLink className="header-item header-item__mobile" to='/'>
                    <h3 className="header-item__title">All Pokémons</h3>
                </NavLink>
                <NavLink className="header-item header-item__mobile" to='/surprise'>
                    <h3 className="header-item__title">Surprise Me</h3>
                </NavLink>
                <NavLink className="header-item header-item__mobile" to='/your-collection'>
                    <h3 className="header-item__title">Your Collection</h3>
                </NavLink>
            </div>
        )
    }

    render() {
        return (
            <>
                <h1 className="mobile-title">Pokédex</h1>
                <button
                    className="burger-toggle"
                    onClick={() => this.handleToggleChange()}>
                        <span className="burger__item"></span>
                        <span className="burger__item"></span>
                        <span className="burger__item"></span>
                </button>

                {this.renderMenu()}
            </>
        );
    }
}

export default HeaderMobile;
