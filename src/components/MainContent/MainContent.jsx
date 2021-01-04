import React, { Component } from 'react';
import Wrapper from '../StylesComponents/Wrapper/Wrapper';
import './MainContent.css';
import MainContentIsLoading from './MainContentIsLoading/MainContentIsLoading';
import PaginationContainer from './Pagination/PaginationContainer';
import PokemonsContainer from './Pokemons/PokemonsContainer';
import SearchSectionContainer from './SearchSection/SearchSectionContainer';

class MainContent extends Component {
    render() {
        if (this.props.isFetching || !this.props.pokemons) {
            return <MainContentIsLoading />
        }

        return (
            <Wrapper >
                <SearchSectionContainer />
                <PaginationContainer />
                <PokemonsContainer />
            </Wrapper>
        );
    }
}

export default MainContent;
