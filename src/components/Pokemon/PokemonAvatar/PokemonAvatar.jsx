import React from 'react';

const PokemonAvatar = ({image}) => {
    return (
        <div className="pokemon-avatar__container">
            <img src={image} alt="" className="pokemon-avatar"/>
        </div>
    );
}

export default PokemonAvatar;
