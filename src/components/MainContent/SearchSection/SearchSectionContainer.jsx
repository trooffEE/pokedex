import React, { Component } from 'react';
import { connect } from 'react-redux';
import {isSearchingCreator, handlePokemonSearchValueChange} from '../../../redux/reducers/pokemonAllreducer'
import SearchSection from './SearchSection';

class SearchSectionContainer extends Component {
    render() {
        return (
            <SearchSection {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isSearching: state.pokemonReducer.isSearching,
    currentPokemonSearchValue: state.pokemonReducer.currentPokemonSearchValue,
});

export default connect(mapStateToProps,
    {
        onInputChange: handlePokemonSearchValueChange,
        isSearchingCreator,
    })(SearchSectionContainer);
