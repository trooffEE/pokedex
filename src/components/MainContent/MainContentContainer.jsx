import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContent from './MainContent';
import {loadDefaultPokemonData, 
    setPokemonMaxAmount, loadAllPokemonsData} from '../../redux/reducers/pokemonAllreducer';

class MainContentContainer extends Component {

    componentDidMount() {
        this.props.setPokemonMaxAmount();
        if (!this.props.areHere) {
            this.props.loadAllPokemonsData();
        }
        this.props.loadDefaultPokemonData(this.props.currentPokemonPage);
    }

    render() {
        return (
            <MainContent {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonReducer.pokemons,
        isFetching: state.pokemonReducer.isFetching,
        currentPokemonPage: state.pokemonReducer.currentPokemonPage,
        areHere: state.pokemonReducer.areHere,
    }
};

export default connect(mapStateToProps, 
    {
        loadDefaultPokemonData,
        setPokemonMaxAmount,
        loadAllPokemonsData,
    }
)(MainContentContainer);
