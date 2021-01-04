import React from 'react';
import '../MainContent.css';
import DefaultPokemonView from '../DefaultPokemonView/DefaultPokemonView';
import PokemonSearchResultContainer from './PokemonsSearchResult/PokemonSearchResultContainer';
import GridCardView from '../../StylesComponents/GridCardView/GridCardView';

const Pokemons = (props) => {

    const displayContent = () => {
        if (!props.isSearching) {
            return <DefaultPokemonView pokemons={props.pokemons} isSearchDefault={props.isSearchDefault}/>
        }
        return <PokemonSearchResultContainer />
    }

    return (
        <GridCardView>
            {displayContent()}
        </GridCardView>
    );
}

export default Pokemons;
