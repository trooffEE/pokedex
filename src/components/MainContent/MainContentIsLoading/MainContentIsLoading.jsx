import React from 'react';
import Preloader from '../../UsefulComponents/Preloader';
import './MainContentIsLoading.css';

const MainContentIsLoading = () => {
    return (
        <div className="main-content-is-loading__container">
          <h1>Please be patient, app is loading...</h1>  
          <Preloader />
        </div>
    );
}

export default MainContentIsLoading;
