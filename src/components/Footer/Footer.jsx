import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer-wrapper">
                <div className="site-footer__author">
                    <p className="">Done with passion by Vadim Spisyn</p>
                    <p>Contacts: <a target="_blank" href="https://twitter.com/Dying_Toffee">Twitter</a> <a target="_blank" href="https://vk.com/your_adorable_internet_friend">Vk</a></p>
                </div>

                <div className="site-footer__powered-by">
                    <p>Powered by: <a href="https://pokeapi.co/" target='_blank'>PokéAPI</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
