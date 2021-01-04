import React from 'react';
import Preloader from '../../UsefulComponents/Preloader'

const PokemonContentIsLoading = () => {
    return (
        <div className="center">
          <Preloader />
        </div>
    );
}

export default PokemonContentIsLoading;
