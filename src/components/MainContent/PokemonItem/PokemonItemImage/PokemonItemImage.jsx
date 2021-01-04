import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonItemImage = ({image, id}) => {
    return (
        <NavLink to={`/pokemon/${id}`} className="pokemon-info__image-container">
            <img src={image} alt='lol' className='pokemon-info__image'/>
        </NavLink>
    );
}

export default PokemonItemImage;
