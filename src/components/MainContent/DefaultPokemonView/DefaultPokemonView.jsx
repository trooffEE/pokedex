import React from 'react';
import Preloader from '../../UsefulComponents/Preloader';
import PokemonItemContainer from '../PokemonItem/PokemonItemContainer';

const DefaultPokemonView = (props) => {
    if (props.isSearchDefault) {
        return <Preloader />
    }

    let allPokemons = props.pokemons.map((pokemon) => <PokemonItemContainer key={pokemon.id} pokemon={pokemon}/>);

    return (
        <>
            {allPokemons}
        </>
    );
}

export default DefaultPokemonView;
