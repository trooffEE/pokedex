import React from 'react';
import PreloaderImage from './Preloader.gif'
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={PreloaderImage} width='100' height='100' alt='loader'/>
        </div>
    );
}

export default Preloader;
