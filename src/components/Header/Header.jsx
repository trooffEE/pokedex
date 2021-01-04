import React, { Component } from 'react';
import './Header.css';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './Mobile/HeaderMobile';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    renderHeader = () => {
        let isMobile = this.state.width < 630 ? true : false;

        if (isMobile) {
            return <HeaderMobile />
        } else {
            return <HeaderDesktop /> 
        }
    }

    render() {
        return (
            <header className="header">
                <div className="header-container">
                    {this.renderHeader()}
                </div>
            </header>
        );
    }
}

export default Header;