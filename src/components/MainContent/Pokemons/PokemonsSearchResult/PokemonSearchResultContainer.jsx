import React, { Component } from 'react';
import { connect } from 'react-redux';
import {searchPokemon} from '../../../../redux/reducers/pokemonAllreducer'
import PokemonSearchResult from './PokemonSearchResult';

class PokemonSearchResultContainer extends Component {
    componentDidUpdate({currentPokemonSearchValue}) {
        if (currentPokemonSearchValue !== this.props.currentPokemonSearchValue) {
            this.props.searchPokemon(this.props.currentPokemonSearchValue);
        }
    }

    render() {
        return (
            <PokemonSearchResult {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemonReducer.pokemons,
    currentPokemonSearchValue: state.pokemonReducer.currentPokemonSearchValue,
    pokemonsSearchResult: state.pokemonReducer.pokemonsSearchResult,
    isSearchSuccess: state.pokemonReducer.isSearchSuccess,
});

export default connect(mapStateToProps,
    {
        searchPokemon,
    })(PokemonSearchResultContainer);
