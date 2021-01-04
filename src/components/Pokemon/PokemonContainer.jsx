import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';
import {getPokemonData} from '../../redux/reducers/pokemonAllreducer';

class PokemonContainer extends Component {
    /**
     * Whenever we have data 
     */
    pokemonID = this.props.match.params.pokemonID;

    componentDidMount() {
        this.props.getPokemonData(this.pokemonID);
    }

    render() {
        return (
            <Pokemon {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    pokemon: state.pokemonReducer.pokemon,
    pokemonLoadingInProgress: state.pokemonReducer.pokemonLoadingInProgress
});

export default connect(mapStateToProps,
    {
        getPokemonData
    })(PokemonContainer);
