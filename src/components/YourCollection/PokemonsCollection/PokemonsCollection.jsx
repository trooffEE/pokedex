import React from 'react';
import PokemonItemContainer from '../../MainContent/PokemonItem/PokemonItemContainer';
import GridCardView from '../../StylesComponents/GridCardView/GridCardView';
import './PokemonsCollection.css';

const PokemonsCollection = (props) => {

    const allCollection = props.collection.map(pokemon => <PokemonItemContainer pokemon={pokemon} key={pokemon.id}/>)

    return (
        <GridCardView>
            {allCollection}
        </GridCardView>
    );
}

export default PokemonsCollection;
