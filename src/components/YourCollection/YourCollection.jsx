import React from 'react';
import Wrapper from '../StylesComponents/Wrapper/Wrapper';
import PokemonsCollection from './PokemonsCollection/PokemonsCollection';
import SortComponentContainer from './SortComponent/SortComponentContainer';
import './YourCollection.css';

const YourCollection = (props) => {
 
    if (!props.collection.length) {
        return <h1 className="empty-collection-message">You don't have any pokemons in your collection!</h1>
    }

    return (
        <Wrapper >
            <SortComponentContainer />
            <PokemonsCollection {...props}/>
        </Wrapper>
    );
}

export default YourCollection;
