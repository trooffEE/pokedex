import React from 'react';

const PokemonItemDescription = ({name}) => {
    return (
        <>
            <p className="pokemon-item__name">{name}</p>
            <p className='pokemon-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, mollitia.</p>
        </>
    );
}

export default PokemonItemDescription;
