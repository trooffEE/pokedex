import React from 'react';
import Preloader from '../../../UsefulComponents/Preloader';
import PokemonItemContainer from '../../PokemonItem/PokemonItemContainer';
import EmptyResult from './EmptyResult';

const PokemonSearchResult = (props) => {
    if (props.pokemonsSearchResult.length === 0) {
        return <EmptyResult />;
    }

    if (!props.isSearchSuccess) {
        return <Preloader />
    }
    
    const allPokemons = props.pokemonsSearchResult.map((pokemon) => <PokemonItemContainer key={pokemon.id} pokemon={pokemon}/>)

    return (
        <>
            {allPokemons}
        </>
    );
}

export default PokemonSearchResult;
