import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import {previousPage, nextPage, setCurrentPage, loadDefaultPokemonData} from '../../../redux/reducers/pokemonAllreducer';

class PaginationContainer extends Component {
    
    componentDidUpdate({currentPokemonPage}) {
        if (currentPokemonPage !== this.props.currentPokemonPage) {
            this.props.loadDefaultPokemonData(this.props.currentPokemonPage);
        }
    }

    render() {
        if (this.props.isSearching) {
            return null;
        }

        return (
            <Pagination {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    pokemonsAmount: state.pokemonReducer.pokemonsAmount,
    pokemonsOnPageLimit: state.pokemonReducer.pokemonsOnPageLimit,
    currentPokemonPage: state.pokemonReducer.currentPokemonPage,
    isSearching: state.pokemonReducer.isSearching,
})

export default connect(mapStateToProps,
    {
        previousPage, nextPage,
        setCurrentPage, loadDefaultPokemonData
    })(PaginationContainer);
