import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemons from './Pokemons';

class PokemonsContainer extends Component {
    render() {
        return (
            <Pokemons {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isSearching: state.pokemonReducer.isSearching,
    pokemons: state.pokemonReducer.pokemons,
    isSearchDefault: state.pokemonReducer.isSearchDefault,
});

export default connect(mapStateToProps,{})(PokemonsContainer);
